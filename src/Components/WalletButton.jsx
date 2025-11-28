import { useWallet } from '../hooks/useWallet';
import { useState } from 'react';
import toast from 'react-hot-toast';

const WalletButton = ({ className = '', fullWidth = false }) => {
    const { isConnected, formattedAddress, connectWallet, disconnectWallet, address } = useWallet();
    const [isConnecting, setIsConnecting] = useState(false);

    const handleConnectWallet = async () => {
        setIsConnecting(true);
        try {
            await connectWallet();
            toast.success('Wallet connected successfully!');
        } catch (error) {
            console.error('Connection error:', error);
            toast.error('Failed to connect wallet. Please try again.');
        } finally {
            setIsConnecting(false);
        }
    };

    const handleDisconnectWallet = async () => {
        try {
            await disconnectWallet();
            toast.success('Wallet disconnected');
        } catch (error) {
            console.error('Disconnect error:', error);
            toast.error('Failed to disconnect wallet');
        }
    };

    if (!isConnected) {
        return (
            <button
                onClick={handleConnectWallet}
                disabled={isConnecting}
                className={`btn btn-secondary ${fullWidth ? 'w-100' : ''} ${className}`}
            >
                <span>{isConnecting ? 'Connecting...' : 'Connect Wallet'}</span>
            </button>
        );
    }

    return (
        <button
            onClick={handleDisconnectWallet}
            className={`btn btn-secondary ${fullWidth ? 'w-100' : ''} ${className}`}
            title={address}
        >
            <span className="text-truncate">{formattedAddress}</span>
        </button>
    );
};

export default WalletButton;
