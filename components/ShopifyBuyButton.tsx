import React, { useEffect, useRef } from 'react';
import { useLanguage, Language } from '../context/LanguageContext';

interface ShopifyBuyButtonProps {
  productId?: string;
  buttonStyle?: 'primary' | 'secondary';
  className?: string;
}

// Shopify text translations per language
const shopifyTranslations: Record<Language, {
  button: string;
  cartTitle: string;
  cartTotal: string;
  cartEmpty: string;
  cartNotice: string;
  cartButton: string;
}> = {
  en: {
    button: 'Add to cart',
    cartTitle: 'Cart',
    cartTotal: 'Subtotal',
    cartEmpty: 'Your cart is empty',
    cartNotice: 'Shipping and discount codes are added at checkout.',
    cartButton: 'Checkout'
  },
  nl: {
    button: 'Toevoegen aan winkelwagen',
    cartTitle: 'Winkelwagen',
    cartTotal: 'Subtotaal',
    cartEmpty: 'Uw winkelwagen is leeg',
    cartNotice: 'Verzend- en kortingscodes worden bij het afrekenen toegevoegd.',
    cartButton: 'Afrekenen'
  },
  de: {
    button: 'In den Warenkorb',
    cartTitle: 'Warenkorb',
    cartTotal: 'Zwischensumme',
    cartEmpty: 'Ihr Warenkorb ist leer',
    cartNotice: 'Versand- und Rabattcodes werden an der Kasse hinzugefügt.',
    cartButton: 'Zur Kasse'
  },
  fr: {
    button: 'Ajouter au panier',
    cartTitle: 'Panier',
    cartTotal: 'Sous-total',
    cartEmpty: 'Votre panier est vide',
    cartNotice: 'Les frais de livraison et codes de réduction sont ajoutés à la caisse.',
    cartButton: 'Commander'
  },
  es: {
    button: 'Añadir al carrito',
    cartTitle: 'Carrito',
    cartTotal: 'Subtotal',
    cartEmpty: 'Tu carrito está vacío',
    cartNotice: 'Los códigos de envío y descuento se añaden al pagar.',
    cartButton: 'Pagar'
  }
};

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

const ShopifyBuyButton: React.FC<ShopifyBuyButtonProps> = ({
  productId = '9574016123227',
  buttonStyle = 'primary',
  className = ''
}) => {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const componentRef = useRef<string>(`shopify-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
  const uiRef = useRef<any>(null);

  useEffect(() => {
    const loadShopifyScript = () => {
      return new Promise<void>((resolve) => {
        if (window.ShopifyBuy) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
    };

    const initShopify = async () => {
      await loadShopifyScript();

      const translations = shopifyTranslations[language];

      const client = window.ShopifyBuy.buildClient({
        domain: '11ze23-ty.myshopify.com',
        storefrontAccessToken: '0e12838b152ec933933c092cea33d938',
      });

      const ui = await window.ShopifyBuy.UI.onReady(client);
      uiRef.current = ui;

      // Clear previous component if exists
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }

      ui.createComponent('product', {
        id: productId,
        node: containerRef.current,
        moneyFormat: '€{{amount_with_comma_separator}}',
        options: {
          product: {
            styles: {
              product: {
                '@media (min-width: 601px)': {
                  'max-width': '100%',
                  'margin-left': '0px',
                  'margin-bottom': '0px'
                }
              },
              button: {
                ':hover': {
                  'background-color': buttonStyle === 'primary' ? '#292524' : '#44403c'
                },
                'background-color': buttonStyle === 'primary' ? '#1c1917' : '#57534e',
                'border-radius': '2px',
                'padding': '16px 32px',
                'font-weight': '500',
                'font-size': '16px',
                ':focus': {
                  'background-color': buttonStyle === 'primary' ? '#292524' : '#44403c'
                }
              }
            },
            contents: {
              img: false,
              title: false,
              price: false
            },
            text: {
              button: translations.button
            }
          },
          productSet: {
            styles: {
              products: {
                '@media (min-width: 601px)': {
                  'margin-left': '-20px'
                }
              }
            }
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true
            },
            styles: {
              product: {
                '@media (min-width: 601px)': {
                  'max-width': '100%',
                  'margin-left': '0px',
                  'margin-bottom': '0px'
                }
              },
              button: {
                ':hover': {
                  'background-color': '#292524'
                },
                'background-color': '#1c1917',
                ':focus': {
                  'background-color': '#292524'
                }
              }
            },
            text: {
              button: translations.button
            }
          },
          option: {},
          cart: {
            styles: {
              button: {
                ':hover': {
                  'background-color': '#292524'
                },
                'background-color': '#1c1917',
                'border-radius': '2px',
                ':focus': {
                  'background-color': '#292524'
                }
              }
            },
            text: {
              title: translations.cartTitle,
              total: translations.cartTotal,
              empty: translations.cartEmpty,
              notice: translations.cartNotice,
              button: translations.cartButton
            },
            popup: false
          },
          toggle: {
            styles: {
              toggle: {
                'background-color': '#1c1917',
                ':hover': {
                  'background-color': '#292524'
                },
                ':focus': {
                  'background-color': '#292524'
                }
              }
            }
          }
        }
      });
    };

    initShopify();

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [language, productId, buttonStyle]);

  return (
    <div
      ref={containerRef}
      id={componentRef.current}
      className={`shopify-buy-button ${className}`}
    />
  );
};

export default ShopifyBuyButton;
