import Script from "next/script"
import React from "react"

export const AnalyticsSettings: React.FC = () => {
    return (
        <React.Fragment>
            <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}`} />
            <Script
                id="google-analytics"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', '${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}');
                    `,
                }}
            />
        </React.Fragment>
    )
}