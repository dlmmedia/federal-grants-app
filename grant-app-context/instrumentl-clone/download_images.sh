#!/bin/bash

# Download all images from Instrumentl website
BASE_DIR="/Users/shaji/Downloads/grant-app-context/instrumentl-clone"

# Create subdirectories
mkdir -p "$BASE_DIR/images/logos"
mkdir -p "$BASE_DIR/images/features"
mkdir -p "$BASE_DIR/images/testimonials"
mkdir -p "$BASE_DIR/images/customer-logos"
mkdir -p "$BASE_DIR/images/social-media"
mkdir -p "$BASE_DIR/images/backgrounds"
mkdir -p "$BASE_DIR/logos"

# Logo
curl -L "https://static-assets.instrumentl.com/assets/instrumentl-logo-90e21c2cdbf1290ee2a4c3ee6a43cda7db080c0480e203b700b40bc102251235.svg" -o "$BASE_DIR/logos/instrumentl-logo.svg"

# Underlines
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/complete-underline-c4c5dd1605c84cd2160301427e0570275555162cef15778545794466d8a78266.svg" -o "$BASE_DIR/images/complete-underline.svg"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/grant-lifecycle-underline-ab612899526e0ab6f55750267d02112d20a4439954d36e12f3f2f93fda5b4e9d.svg" -o "$BASE_DIR/images/grant-lifecycle-underline.svg"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/cta-easy-underline-19858c876a862f69f0ff2e4f5f27e822e6410ecc2677c25d927069bc19faa9d9.svg" -o "$BASE_DIR/images/cta-underline.svg"

# Hero section
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/homepage-video-still-d2e2e91758257fbe75f283abaa15745c55fbfb99cf0e7ce0e1875cd0d72e4b42.png" -o "$BASE_DIR/images/homepage-video-still.png"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/homepage-video-play-button-34402118cdd5209ee583bde0a19f485f14353b49004bf5d4f9a19727610a8c43.png" -o "$BASE_DIR/images/homepage-video-play-button.png"

# Lifecycle image
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/tl-cycles-4d2c6759e8fdc7bb46a98d393261117a2bee74d0bd99da1f8f74c972403d5abe.png" -o "$BASE_DIR/images/grant-lifecycle.png"

# Customer logos
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/customer-logos/dupage-habitat-for-humanity-d5fb090912f5608d8ed7a64b27bda1553ef0030e19ba8d3d62f2d9cbf2016a70.png" -o "$BASE_DIR/images/customer-logos/dupage-habitat-for-humanity.png"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/customer-logos/marlene-meyerson-jcc-04ede9c3d0e2756ac9f0e8181fc93ae9c2d96c4f3c99dea3e62618ec5d88d373.png" -o "$BASE_DIR/images/customer-logos/marlene-meyerson-jcc.png"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/customer-logos/nyu-langone-health-257ce4f220afcadf89fb1dbb6ec16f772cfb3f908052c5aaecf96e5e86e5af63.png" -o "$BASE_DIR/images/customer-logos/nyu-langone-health.png"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/customer-logos/phoenix-childrens-c9e9c1d8409ad3593943d46d06119176eda9292d998dad25781bb68d7515a60a.png" -o "$BASE_DIR/images/customer-logos/phoenix-childrens.png"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/customer-logos/pro-choice-nc-0b159ee1b36aa5f59d502194e64f1b317eba43b4c0cee2cc2073c35d447e5346.png" -o "$BASE_DIR/images/customer-logos/pro-choice-nc.png"

# Feature images
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/features/Funder%20insights-d5800fcff2eab82fb76af9769dc04ad895c14408ea7ceb803b603def11fbe088.png" -o "$BASE_DIR/images/features/funder-insights.png"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/features/Openness-cccace535fc05ec6138acf6614b81b2491955d44fe6ad97cbc176e2b6f54c6a7.webp" -o "$BASE_DIR/images/features/openness.webp"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/features/Past%20Grantees-b262ae0399df9494c0f80fb2c45026edbf58254a5f4ad64d61036f0e026d934f.png" -o "$BASE_DIR/images/features/past-grantees.png"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/features/Overview-1baca0f1e92609cd320d3cba6ba0b4c0f0156c25f101c6b593b053085b1e3348.webp" -o "$BASE_DIR/images/features/overview.webp"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/features/Grant%20Tracker-d54736981333a219b18d2e07a16dea3d17a47cf0e43a559b8fcc51fa7bf8dcaf.png" -o "$BASE_DIR/images/features/grant-tracker.png"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/features/Awards%20view-8bfe71469cf7ca24e39cdcf92707f9a6984edf9b8dfb549d5cad262530a6d692.png" -o "$BASE_DIR/images/features/awards-view.png"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/features/Apply1-a19652f0a95d69b8eeffe49400ca19eba5a9b953ec821fdbc034a8b4cc3d0789.webp" -o "$BASE_DIR/images/features/apply1.webp"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/features/Apply2-93a3c7574d3883818241d18cacab87da1c307f992c4b36fd3637e11f1b1aa377.webp" -o "$BASE_DIR/images/features/apply2.webp"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/features/Apply3-12b43766204dd570b90dcc2d130eccab8594f44c7e52f56910f0b13cf99c0b3d.webp" -o "$BASE_DIR/images/features/apply3.webp"

# Stars
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/stars-6f8d82075ab1ea48b61d35cc88cbe5f40854a91388d8f55051c9686bbdd43223.svg" -o "$BASE_DIR/images/stars.svg"

# Testimonials
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/testimonials/beth-kander-dauphin-c17e0ad0d6b2f44da539a489812be7b1c70240a7ff209701b6041328a9e5f564.png" -o "$BASE_DIR/images/testimonials/beth-kander-dauphin.png"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/testimonials/theresa-anderson-6b704f31fa6642d9f4c745724bde4870c1408802e526853be6b2896ee3e61fc0.png" -o "$BASE_DIR/images/testimonials/theresa-anderson.png"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/testimonials/beth-noble-3f97bac4901a8f3d8dda8ffba14e45d8551c9c0ac9d46b7f3f70ef773802354c.png" -o "$BASE_DIR/images/testimonials/beth-noble.png"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/testimonials/dr-bev-browning-a519ca84a89b79aab409ed3137a4323a08264113c2e3621c35e95fb406bd8293.png" -o "$BASE_DIR/images/testimonials/dr-bev-browning.png"

# Funder logos
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/amazon-bd81b82194871c4fce859c52fcb8730c5f3e17ad7140014406b2772bb1c21f4d.png" -o "$BASE_DIR/images/amazon.png"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/the-kresge-foundation-22ec760c1e5cb62501f2485107822cc661f485d62e35099cb34bffb22988d0e6.png" -o "$BASE_DIR/images/kresge-foundation.png"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/patagonia-1522fd93f6ec01cf2eb37a6ccd09b38689e01e0d81e90be0fa0aaeba720d1665.png" -o "$BASE_DIR/images/patagonia.png"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/macarthur-foundation-0fe9152ca6bb399c1ba5df2c90eb7434c8d3aee6f5f3d5a0eb3de404ac3c7d9d.png" -o "$BASE_DIR/images/macarthur-foundation.png"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/usda-3b0576a9313eb87ede57d265ccf7772edb9436d78d3a969ccfd3e8e469c88db8.png" -o "$BASE_DIR/images/usda.png"

# CTA background
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/cta-bg-3052cfef541a5929040ecc2554ce8ccdcebec608d18bdab10b3be0e1c26d5c0b.jpg" -o "$BASE_DIR/images/backgrounds/cta-bg.jpg"

# Background images
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/features-with-carousel-bg-8dcb45a7e7f07837d9ff96c31542ae59fef103d228dff97076770aea8c9babf1.webp" -o "$BASE_DIR/images/backgrounds/features-carousel-bg.webp"
curl -L "https://static-assets.instrumentl.com/assets/revamped-homepage/wave-246e3a1e477d03d64373ec987eb29f8a4fc8fc5afa50e861c8df7ea1a34f8cf5.svg" -o "$BASE_DIR/images/backgrounds/wave.svg"

# Social media logos
curl -L "https://static-assets.instrumentl.com/assets/social-media/linkedin-social-logo-0ffc876edd676babf2043b8061811a59531f47a3ced911fd18b545b7c1393b5c.svg" -o "$BASE_DIR/images/social-media/linkedin.svg"
curl -L "https://static-assets.instrumentl.com/assets/social-media/facebook-social-logo-06802a0eba1e3a2646fc7f64e1349833017813315350d78d74a17b983e5f52fa.svg" -o "$BASE_DIR/images/social-media/facebook.svg"
curl -L "https://static-assets.instrumentl.com/assets/social-media/x-social-logo-acb5c65ce8a6a1bb7cd2baf5b0c574bd5dfc2b1ee85b0b68d7dfebccea604ce3.svg" -o "$BASE_DIR/images/social-media/x.svg"
curl -L "https://static-assets.instrumentl.com/assets/social-media/youtube-social-logo-9008de62fc70ef2e49852dd9da2d0085bd38dbb2edcbae659354a5b796f4593e.svg" -o "$BASE_DIR/images/social-media/youtube.svg"

echo "All images downloaded successfully!"
