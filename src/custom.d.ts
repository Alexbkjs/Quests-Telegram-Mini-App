interface BackButton {
  isVisible: boolean;
  onClick: () => void;
  show: () => void;
  hide: () => void;
}

interface TelegramWebApp {
  WebApp: {
    initData: string;
    initDataUnsafe: object;
    version: string;
    platform: string;
    themeParams: object;
    colorScheme: string;
    isExpanded: boolean;
    viewportHeight: number;
    headerColor: string;
    backgroundColor: string;
    BackButton: BackButton; // Use the specific BackButton type
    MainButton: object;
    HapticFeedback: object;
    openInvoice: (invoiceUrl: string) => void;
    openTelegramLink: (url: string) => void;
    openTelegramGame: (url: string) => void;
    close: () => void;
    expand: () => void;
    enableClosingConfirmation: () => void;
    disableClosingConfirmation: () => void;
    onEvent: (eventType: string, callback: () => void) => void;
    offEvent: (eventType: string, callback: () => void) => void;
    isClosingConfirmationEnabled: boolean;
    isVerticalSwipesEnabled: boolean;
    setHeaderColor: (headerColor: string) => void;
    ready: () => void;
  };
}

interface Window {
  Telegram: TelegramWebApp;
}
