exports.id = 171;
exports.ids = [171];
exports.modules = {

/***/ 3263:
/***/ (() => {



/***/ }),

/***/ 4838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   "metadata": () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4458);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5553);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1094);



const metadata = {
    title: "Hackathon",
    description: "Generated by create next app"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("head", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "shortcut icon",
                    href: "/logoXR.png"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    children,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "module",
                        children: "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 6592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1198);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



function Button({ type ="button" , className , children , onClick  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: onClick,
        type: type,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("font-lato hover:bg-[#4C24D0] transition-all ease-in-out duration-300 no-underline h-12", className),
        children: children
    });
}


/***/ }),

/***/ 4062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5361);


function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "bg-[#181623] h-[20vh] w-full gap-4 flex flex-col justify-center items-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col items-center justify-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Title__WEBPACK_IMPORTED_MODULE_1__/* .Title */ .D, {
                    color: "white",
                    children: "\xa9 2023 AnimaDAO."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Title__WEBPACK_IMPORTED_MODULE_1__/* .Title */ .D, {
                    color: "white",
                    children: "All rights reserved."
                })
            ]
        })
    });
}


/***/ }),

/***/ 9773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var index_esm = __webpack_require__(5228);
;// CONCATENATED MODULE: ./src/Components/Button/ConnectButton.tsx

/* import { useState } from "react";
import Web3 from "web3";
import { newKit, newKitFromWeb3 } from "@celo/contractkit"; */ 
/* var window: Window & MetaMaskInpageProvider & any; */ function ConnectButton({ setWallet  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
            onClick: setWallet,
            className: "cursor-pointer",
            children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BiWalletAlt */.yyp, {
                color: "white",
                size: 24
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/react-icons/cg/index.esm.js
var cg_index_esm = __webpack_require__(2314);
;// CONCATENATED MODULE: ./src/Components/Icon/avatar.tsx

function Avatar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                id: "mask0_7_10331",
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                children: /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                    cx: "16",
                    cy: "16",
                    r: "16",
                    fill: "#D9D9D9"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                mask: "url(#mask0_7_10331)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "16",
                        cy: "16",
                        r: "16",
                        fill: "#D9D9D9"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M16 7C15.0111 7 14.0444 7.29324 13.2221 7.84265C12.3999 8.39206 11.759 9.17295 11.3806 10.0866C11.0022 11.0002 10.9031 12.0055 11.0961 12.9755C11.289 13.9454 11.7652 14.8363 12.4645 15.5355C13.1637 16.2348 14.0546 16.711 15.0245 16.9039C15.9945 17.0969 16.9998 16.9978 17.9134 16.6194C18.827 16.241 19.6079 15.6001 20.1573 14.7779C20.7068 13.9556 21 12.9889 21 12C21 10.6739 20.4732 9.40215 19.5355 8.46447C18.5979 7.52678 17.3261 7 16 7ZM16 15C15.4067 15 14.8266 14.8241 14.3333 14.4944C13.8399 14.1648 13.4554 13.6962 13.2284 13.1481C13.0013 12.5999 12.9419 11.9967 13.0576 11.4147C13.1734 10.8328 13.4591 10.2982 13.8787 9.87868C14.2982 9.45912 14.8328 9.1734 15.4147 9.05764C15.9967 8.94189 16.5999 9.0013 17.1481 9.22836C17.6962 9.45542 18.1648 9.83994 18.4944 10.3333C18.8241 10.8266 19 11.4067 19 12C19 12.7956 18.6839 13.5587 18.1213 14.1213C17.5587 14.6839 16.7956 15 16 15ZM25 26V25C25 23.1435 24.2625 21.363 22.9497 20.0503C21.637 18.7375 19.8565 18 18 18H14C12.1435 18 10.363 18.7375 9.05025 20.0503C7.7375 21.363 7 23.1435 7 25V26H9V25C9 23.6739 9.52678 22.4021 10.4645 21.4645C11.4021 20.5268 12.6739 20 14 20H18C19.3261 20 20.5979 20.5268 21.5355 21.4645C22.4732 22.4021 23 23.6739 23 25V26H25Z",
                        fill: "black"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/Components/Icon/Map.tsx
var Map = __webpack_require__(9895);
// EXTERNAL MODULE: ./src/Components/Icon/arrowdown.tsx
var arrowdown = __webpack_require__(8411);
// EXTERNAL MODULE: ./src/Components/Title/index.tsx
var Title = __webpack_require__(5361);
;// CONCATENATED MODULE: ./src/Components/Dropdown/index.tsx




function Dropdown() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Map/* Map */.D, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Title/* Title */.D, {
                color: "white",
                children: "Qualquer lugar"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(arrowdown/* Arrowdown */.Z, {})
        ]
    });
}

// EXTERNAL MODULE: ./src/Components/Search/index.tsx + 1 modules
var Search = __webpack_require__(6282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/Components/Button/index.tsx
var Button = __webpack_require__(6592);
// EXTERNAL MODULE: ./src/Components/Icon/Close.tsx
var Close = __webpack_require__(3757);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/helpers/StorageHelper.ts
var StorageHelper = __webpack_require__(6952);
;// CONCATENATED MODULE: ./src/Components/Modal/Access.tsx







function Access({ onClick  }) {
    const [step, setStep] = (0,react_.useState)(1);
    async function addNetwork() {
        const customWindow = window;
        if (customWindow.ethereum) {
            try {
                const accounts = await customWindow.ethereum.request({
                    method: "eth_requestAccounts"
                });
                console.log(accounts[0]);
                StorageHelper/* StorageHelper.setItem */.c.setItem("adress", accounts[0]);
            } catch (err) {
                console.log(err);
            }
            try {
                await customWindow.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [
                        {
                            chainId: "0xAEF3",
                            chainName: "Celo native asset",
                            nativeCurrency: {
                                name: "Celo native asset",
                                symbol: "CELO",
                                decimals: 18
                            },
                            blockExplorerUrls: [
                                "https://testnet.bscscan.com"
                            ],
                            rpcUrl: "wss://alfajores-forno.celo-testnet.org/ws"
                        }
                    ]
                });
            } catch (error) {
                console.log(error);
            }
            try {
                await customWindow.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId: "0xAEF3",
                            chainName: "Celo native asset",
                            nativeCurrency: {
                                name: "Celo native asset",
                                symbol: "CELO",
                                decimals: 18
                            },
                            blockExplorerUrls: [
                                "https://testnet.bscscan.com"
                            ],
                            rpcUrls: [
                                "https://alfajores-forno.celo-testnet.org"
                            ]
                        }
                    ]
                });
            } catch (addError) {
                console.log(addError);
            }
        } else {
            // if no window.ethereum then MetaMask is not installed
            alert("MetaMask is not installed.");
        }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "fixed w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,.3)] z-50",
            children: [
                step === 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "h-[20vh] w-[30vw] px-14 bg-brand-primary border border-[rgba(255,255,255,.3)] rounded-2xl flex flex-col justify-center items-center gap-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Close/* Close */.x, {
                            className: "absolute top-[42%] right-[36%] cursor-pointer",
                            onClick: onClick
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Title/* Title */.D, {
                            color: "white",
                            className: "text-lg font-medium",
                            children: "Como deseja acessar nossa plataforma?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: ()=>setStep(2),
                            className: "bg-[#353441] text-lg transition-all duration-300 ease-in-out font-medium text-white font-lato w-full flex justify-start items-center h-12 px-4 hover:bg-[#4C24D0] border border-[rgba(255,255,255,.3)] rounded-lg",
                            children: "Entrar como usu\xe1rio"
                        })
                    ]
                }),
                step === 2 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "h-[20vh] w-[30vw] bg-brand-primary flex flex-col justify-center items-start rounded-2xl py-40 px-20",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center justify-center gap-2 font-medium text-[24px] text-white mb-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>setStep(1),
                                    className: "cursor-pointer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        width: "27",
                                        height: "27",
                                        viewBox: "0 0 27 27",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                            opacity: "0.5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                "fill-rule": "evenodd",
                                                "clip-rule": "evenodd",
                                                d: "M10.5 2.25C7.92603 2.25 5.92914 2.7602 4.59467 4.09467C3.2602 5.42914 2.75 7.42603 2.75 10V16C2.75 18.574 3.2602 20.5709 4.59467 21.9053C5.92914 23.2398 7.92603 23.75 10.5 23.75H16.5C19.074 23.75 21.0709 23.2398 22.4053 21.9053C23.7398 20.5709 24.25 18.574 24.25 16V10C24.25 7.42603 23.7398 5.42914 22.4053 4.09467C21.0709 2.7602 19.074 2.25 16.5 2.25H10.5ZM4.25 10C4.25 7.57397 4.7398 6.07086 5.65533 5.15533C6.57086 4.2398 8.07397 3.75 10.5 3.75H16.5C18.926 3.75 20.4291 4.2398 21.3447 5.15533C22.2602 6.07086 22.75 7.57397 22.75 10V16C22.75 18.426 22.2602 19.9291 21.3447 20.8447C20.4291 21.7602 18.926 22.25 16.5 22.25H10.5C8.07397 22.25 6.57086 21.7602 5.65533 20.8447C4.7398 19.9291 4.25 18.426 4.25 16V10ZM15.2913 9.99955C15.5838 9.70624 15.5831 9.23137 15.2898 8.93889C14.9965 8.64641 14.5216 8.64709 14.2292 8.94039L10.7092 12.4704C10.4173 12.7631 10.4173 13.2368 10.7092 13.5295L14.2292 17.0595C14.5216 17.3529 14.9965 17.3535 15.2898 17.0611C15.5831 16.7686 15.5838 16.2937 15.2913 16.0004L12.2994 13L15.2913 9.99955Z",
                                                fill: "#F2F2F2"
                                            })
                                        })
                                    })
                                }),
                                "Login"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            action: "",
                            className: "w-full mt-4 flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* Button */.z, {
                                    onClick: addNetwork,
                                    className: "bg-[#4C24D0] w-full mt-8 rounded-lg flex items-center justify-between px-4 text-white font-lato font-medium ",
                                    children: [
                                        "Conectar a wallet",
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            height: 1000,
                                            width: 1000,
                                            src: "/metamask.png",
                                            alt: "metamask",
                                            className: "w-6"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                                    onClick: ()=>setStep(1),
                                    className: "bg-transparent w-full border border-[rgba(255,255,255,.3)] text-white font-lato font-medium rounded-lg",
                                    children: "Voltar"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/Components/Header/index.tsx










function Header() {
    const [modal, setModal] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            modal && /*#__PURE__*/ jsx_runtime_.jsx(Access, {
                onClick: ()=>setModal(false)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-[8vh] bg-[#181623] px-24 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Title/* Title */.D, {
                            color: "white",
                            children: "NAMEPROJECT"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-end gap-8 w-[100%]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Search/* Search */.o, {
                                placeholder: "Pesquise sobre eventos, ingressos e empresas"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Dropdown, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(ConnectButton, {
                                setWallet: ()=>setModal(true)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(cg_index_esm/* CgShoppingCart */.Tr3, {
                                size: 24,
                                color: "white",
                                className: "cursor-pointer"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/perfil",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Avatar, {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Close)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Close({ className , onClick  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onClick: onClick,
        className: className,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M18 33C26.25 33 33 26.25 33 18C33 9.75 26.25 3 18 3C9.75 3 3 9.75 3 18C3 26.25 9.75 33 18 33Z",
                    stroke: "#F5F5F5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M13.7549 22.245L22.2449 13.755",
                    stroke: "#F5F5F5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M22.2449 22.245L13.7549 13.755",
                    stroke: "#F5F5F5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            ]
        })
    });
}


/***/ }),

/***/ 9895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ Map)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Map() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M9.1659 19.8152C9.4699 19.5982 16.6149 14.4402 16.5859 8.00024L8.8764 19.4076M9.1659 19.8152L8.87706 19.4071C8.87684 19.4073 8.87662 19.4074 8.8764 19.4076M9.1659 19.8152C8.99631 19.9353 8.79367 19.9997 8.5859 19.9997C8.37814 19.9997 8.17549 19.9353 8.0059 19.8152H9.1659ZM8.8764 19.4076C9.02066 19.3045 10.8422 17.989 12.6213 15.9158C14.414 13.8267 16.0996 11.0427 16.0859 8.0025L16.0859 8.00024C16.0859 3.86539 12.7208 0.500244 8.5859 0.500244C4.45088 0.500244 1.0859 3.86555 1.0859 7.99624V7.99849H1.0859C1.07221 11.0407 2.75786 13.8258 4.55051 15.9153C6.33002 17.9895 8.15196 19.3051 8.2955 19.4076C8.38048 19.4676 8.48191 19.4997 8.5859 19.4997C8.68993 19.4997 8.79141 19.4675 8.8764 19.4076ZM8.27074 18.1234L8.58581 18.3792L8.90095 18.1235C9.72278 17.4567 11.2617 16.1047 12.5966 14.3458C13.9249 12.5955 15.0968 10.3823 15.0859 8.00306C15.0853 4.41468 12.1709 1.50024 8.5859 1.50024C5.00115 1.50024 2.08654 4.41446 2.0859 7.99906C2.07504 10.3802 3.24714 12.5944 4.57558 14.3452C5.91058 16.1047 7.44951 17.4566 8.27074 18.1234Z",
                stroke: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8.36832 11.9354C8.43191 11.9774 8.5079 12 8.58582 12C8.66373 12 8.73972 11.9774 8.80331 11.9354C8.91731 11.8595 11.5967 10.0541 11.5858 7.80007C11.5858 6.25618 10.2399 5 8.58582 5C6.93171 5 5.58585 6.25618 5.58585 7.79867C5.57497 10.0541 8.25432 11.8595 8.36832 11.9354ZM8.58582 5.70002C9.82668 5.70002 10.8358 6.64189 10.8358 7.80147C10.8437 9.35481 9.19031 10.7496 8.58582 11.2074C7.9817 10.7496 6.32797 9.35481 6.33584 7.80007C6.33584 6.64189 7.34495 5.70002 8.58582 5.70002Z",
                fill: "white"
            })
        ]
    });
}


/***/ }),

/***/ 8411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Arrowdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Arrowdown({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            width: "12",
            height: "8",
            viewBox: "0 0 12 8",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12 1.85349L10.586 0.439486L6.293 4.73249L2 0.439487L0.585999 1.85349L6.293 7.56049L12 1.85349Z",
                fill: "white"
            })
        })
    });
}


/***/ }),

/***/ 6282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ Search)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(1198);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/Components/Icon/Lupa.tsx

function Lupa() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9.58317 17.5C13.9554 17.5 17.4998 13.9556 17.4998 9.58335C17.4998 5.2111 13.9554 1.66669 9.58317 1.66669C5.21092 1.66669 1.6665 5.2111 1.6665 9.58335C1.6665 13.9556 5.21092 17.5 9.58317 17.5Z",
                stroke: "white",
                strokeWidth: "0.959395",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M18.3334 18.3334L16.6667 16.6667",
                stroke: "white",
                strokeWidth: "0.959395",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/Components/Search/index.tsx



function Search({ className , placeholder  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
        className: classnames_default()("w-1/4 h-10 border rounded-3xl flex items-center px-4", className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Lupa, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                placeholder: placeholder,
                className: "bg-transparent outline-none w-full h-full px-2 text-white font-lato font-normal"
            })
        ]
    });
}


/***/ }),

/***/ 5361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1198);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



function Title({ children , className , color , ref , onClick , id  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        id: id,
        ref: ref,
        onClick: onClick,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("font-lato", {
            "text-black": color === "black"
        }, {
            "text-white": color === "white"
        }, {
            "text-[#FFA958]": color === "yellow"
        }, className),
        children: children
    });
}


/***/ }),

/***/ 6952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ StorageHelper)
/* harmony export */ });
const STORAGE_BASE_KEY = "@NFT_Bloom_";
function getKey(key) {
    return STORAGE_BASE_KEY + key;
}
function getItem(key) {
    key = getKey(key);
    if (false) {}
}
function setItem(key, data) {
    key = getKey(key);
    localStorage.setItem(key, JSON.stringify(data));
}
function removeItem(key) {
    key = getKey(key);
    localStorage.removeItem(key);
}
const StorageHelper = {
    getItem,
    setItem,
    removeItem
};


/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;