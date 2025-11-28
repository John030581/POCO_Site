import { useWallet } from '../hooks/useWallet';

const WalletInfo = ({ showBalance = false, className = '' }) => {
    const { isConnected, formattedAddress, formattedBalance, chain } = useWallet();

    if (!isConnected) {
        return null;
    }

    return (
        <div className={`d-flex justify-content-center align-items-center text-center ${className}`}>
            <span className="text-uppercase text-success me-2">
                ✓ Connected
            </span>
            <span className="text-light">
                {formattedAddress}
            </span>
            {chain && (
                <span className="text-light ms-2">
                    ({chain.name})
                </span>
            )}
            {showBalance && formattedBalance && (
                <span className="text-light ms-2">
                    | {formattedBalance} {chain?.nativeCurrency?.symbol || 'ETH'}
                </span>
            )}
        </div>
    );
};

export default WalletInfo;
