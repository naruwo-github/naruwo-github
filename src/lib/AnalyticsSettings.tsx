import Script from "next/script"
import React from "react"

export const AnalyticsSettings: React.FC = () => {
    const measurementId: string | undefined = process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID
    if (typeof measurementId === 'undefined' || measurementId === '') {
        console.warn('Google Analytics Measurement ID is not set')
        return null
    }

    return (
        <React.Fragment>
            <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
            <Script
                id="google-analytics"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', '${measurementId}');
                    `,
                }}
            />
        </React.Fragment>
    )
}