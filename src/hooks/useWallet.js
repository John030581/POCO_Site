import { useAppKit } from '@reown/appkit/react';
import { useAccount, useDisconnect, useBalance } from 'wagmi';
import { useState, useEffect } from 'react';

export const useWallet = () => {
    const { open } = useAppKit();
    const { address, isConnected, chain } = useAccount();
    const { disconnect } = useDisconnect();
    const [walletAddress, setWalletAddress] = useState(null);

    // Get balance for the connected wallet
    const { data: balance } = useBalance({
        address: address,
    });

    useEffect(() => {
        if (isConnected && address) {
            setWalletAddress(address);
        } else {
            setWalletAddress(null);
        }
    }, [isConnected, address]);

    const connectWallet = async () => {
        try {
            await open();
        } catch (error) {
            console.error('Failed to connect wallet:', error);
            throw error;
        }
    };

    const disconnectWallet = async () => {
        try {
            await disconnect();
            setWalletAddress(null);
        } catch (error) {
            console.error('Failed to disconnect wallet:', error);
            throw error;
        }
    };

    const formatAddress = (addr) => {
        if (!addr) return '';
        return `${addr.slice(0, 5)}...${addr.slice(-4)}`;
    };

    const formatBalance = () => {
        if (!balance) return '0';
        return parseFloat(balance.formatted).toFixed(4);
    };

    return {
        address: walletAddress,
        isConnected,
        chain,
        balance: balance?.formatted || '0',
        formattedBalance: formatBalance(),
        formattedAddress: formatAddress(walletAddress),
        connectWallet,
        disconnectWallet,
        openModal: open,
    };
};
