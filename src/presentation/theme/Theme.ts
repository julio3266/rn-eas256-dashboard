export interface Theme {
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        error: string;
        gray: string;
        shimmerBgPrimary: string;
        shimmerBgSecondary: string;
    };
    spacing: {
        sm: number;
        md: number;
        lg: number;
    };
}

export const theme: Theme = {
    colors: {
        primary: '#58196d',
        background: '#1d0824',
        card: '#1F2937',
        text: '#F9FAFB',
        error: '#EF4444',
        gray: 'rgba(255,255,255,0.25)',
        shimmerBgPrimary: '#2a1036',
        shimmerBgSecondary: '#3b1b4d',
    },
    spacing: {
        sm: 8,
        md: 16,
        lg: 24,
    },
};
