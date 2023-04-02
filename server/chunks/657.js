exports.id = 657;
exports.ids = [657];
exports.modules = {

/***/ 2884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ NoBenef)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9322);
/* harmony import */ var _helpers_StorageHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6952);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5361);
/* harmony import */ var _Icon_Clock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9447);
/* harmony import */ var _Icon_Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9895);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6592);
/* harmony import */ var _Icon_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3757);
/* harmony import */ var _Icon_arrowdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8411);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3518);
/* harmony import */ var _Input_index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1354);
/* harmony import */ var _Input_index_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Input_index_css__WEBPACK_IMPORTED_MODULE_12__);





//IMPORTS COMPONENTS








function NoBenef({ onClick  }) {
    const [usd, setUsd] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const adress = _helpers_StorageHelper__WEBPACK_IMPORTED_MODULE_4__/* .StorageHelper.getItem */ .c.getItem("adress");
    const enterpriseAdress = "0x8bD582Da59Cc09b4486D29eD180FB23f94951a49";
    const eventContract = "0x3f38e875edc17ae02730984a6f5e2a4a4ff15842";
    const id = 3;
    if (value < 0) setValue(0);
    console.log(value);
    async function buy() {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_11__/* ["default"].loading */ .ZP.loading("Carregando...");
        const amount = value;
        const tx = await (0,_Functions__WEBPACK_IMPORTED_MODULE_3__/* .comprarTicket */ .UT)(eventContract, id, amount);
        await tx.wait(1);
        (0,_Functions__WEBPACK_IMPORTED_MODULE_3__/* .balanceOfUsd */ .TD)(adress).then((response)=>setUsd(Number(response))).catch((err)=>console.log(err));
        const data = await (0,_Functions__WEBPACK_IMPORTED_MODULE_3__/* .balanceOf1155 */ .n4)(enterpriseAdress, id, eventContract);
        setQuantity(Number(data));
        react_hot_toast__WEBPACK_IMPORTED_MODULE_11__/* ["default"].success */ .ZP.success("Sucesso!!");
    }
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const adress = _helpers_StorageHelper__WEBPACK_IMPORTED_MODULE_4__/* .StorageHelper.getItem */ .c.getItem("adress");
        (0,_Functions__WEBPACK_IMPORTED_MODULE_3__/* .balanceOfUsd */ .TD)(adress).then((response)=>setUsd(Number(response))).catch((err)=>console.log(err));
        (0,_Functions__WEBPACK_IMPORTED_MODULE_3__/* .balanceOf1155 */ .n4)(enterpriseAdress, id, eventContract).then((response)=>setQuantity(Number(response))).catch((err)=>console.log(err));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "fixed h-screen w-screen bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-50",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon_Close__WEBPACK_IMPORTED_MODULE_9__/* .Close */ .x, {
                    className: "absolute top-16 right-[32%] cursor-pointer",
                    onClick: onClick
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "h-[90vh] w-[40%] flex flex-col gap-4 px-20 p-8 bg-brand-primary rounded-2xl border border-[rgba(255,255,255,.3)]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            height: 1000,
                            width: 1000,
                            src: "/ticketNao.png",
                            alt: "preview",
                            className: "w-[70%] self-center"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center w-full justify-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Title__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .D, {
                                    color: "white",
                                    className: "text-lg font-bold",
                                    children: "Ticket Espectador"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Title__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .D, {
                                    color: "white",
                                    className: "text-lg font-bold",
                                    children: "$50"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon_Map__WEBPACK_IMPORTED_MODULE_7__/* .Map */ .D, {}),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Title__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .D, {
                                    className: "text-[rgba(255,255,255,.7)] font-medium",
                                    children: [
                                        "Evento presencial em",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "border-b border-brand-text text-brand-text",
                                            children: "Igloo Network - S\xe3o Paulo, SP"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon_Clock__WEBPACK_IMPORTED_MODULE_6__/* .Clock */ .S, {}),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Title__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .D, {
                                    className: "text-[rgba(255,255,255,.7)] font-medium",
                                    children: [
                                        "31 mar - 2023 • 11:52 ",
                                        ">",
                                        " 17 abr - 2023 • 11:00"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bg-[#26252F] text-[rgba(255,255,255,.7)] rounded-lg flex items-center justify-between w-[50%] h-12 p-3 border border-[rgba(255,255,255,.3)]",
                                    children: [
                                        "USD ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: usd
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "bg-[#26252F] text-[rgba(255,255,255,.7)] rounded-lg flex items-center gap-2 w-[50%] h-12 p-3 border border-[rgba(255,255,255,.3)]",
                                    children: "Token n\xe3o beneficiente"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-[#1B1A26] text-[rgba(255,255,255,.7)] rounded-lg flex flex-col items-start gap-4 w-full h-full border border-[rgba(255,255,255,.3)]",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full h-14 bg-[#26252F] rounded-t-lg flex items-center justify-between border-b px-4 border-[rgba(255,255,255,.3)]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Title__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .D, {
                                            color: "white",
                                            className: "font-medium",
                                            children: "Ingressos restantes"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Title__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .D, {
                                            color: "white",
                                            className: "font-medium",
                                            children: quantity
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full flex items-center justify-between px-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Title__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .D, {
                                            color: "white",
                                            className: "font-medium",
                                            children: "Qt de ingressos"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            className: "flex items-center gap-1 transition-all duration-300 ease-in-out",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `border ${value === 0 ? "border-[rgba(255,255,255,0.3)]" : "border-[rgba(255,255,255,1)]"} rounded-full w-6 h-6 flex justify-center items-center pr-[2px] cursor-pointer transition-all duration-300 ease-in-out`,
                                                    onClick: ()=>setValue(value - 1),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon_arrowdown__WEBPACK_IMPORTED_MODULE_10__/* .Arrowdown */ .Z, {
                                                        className: "rotate-90"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "rounded-full w-6 h-6 p-3 bg-transparent flex justify-center items-center border outline-none transition-all duration-300 ease-in-out",
                                                    children: value
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `border rounded-full w-6 h-6 flex justify-center items-center pl-[1px] cursor-pointer ${value != 0 && "bg-[#4C24D0]"} transition-all duration-300 ease-in-out`,
                                                    onClick: ()=>setValue(value + 1),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon_arrowdown__WEBPACK_IMPORTED_MODULE_10__/* .Arrowdown */ .Z, {
                                                        className: "-rotate-90"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex w-full justify-center items-center text-base font-normal text-[rgba(255,255,255,.7)]",
                                    children: "Vendas at\xe9 17/04/2023"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                    onClick: buy,
                                    className: "w-[80%] mb-4 text-white self-center text-lg font-normal rounded-lg outline-none border border-[rgba(255,255,255,.3)]",
                                    children: "Comprar"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 4022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9322);
/* harmony import */ var _helpers_StorageHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6952);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5361);
/* harmony import */ var _Icon_Clock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9447);
/* harmony import */ var _Icon_Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9895);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6592);
/* harmony import */ var _Icon_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3757);
/* harmony import */ var _Icon_arrowdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8411);
/* harmony import */ var _Input_index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1354);
/* harmony import */ var _Input_index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Input_index_css__WEBPACK_IMPORTED_MODULE_11__);





//IMPORTS COMPONENTS







function Modal({ onClick  }) {
    const [usd, setUsd] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const adress = _helpers_StorageHelper__WEBPACK_IMPORTED_MODULE_4__/* .StorageHelper.getItem */ .c.getItem("adress");
    const enterpriseAdress = "0x8bD582Da59Cc09b4486D29eD180FB23f94951a49";
    const eventContract = "0x3f38e875edc17ae02730984a6f5e2a4a4ff15842";
    const id = 2;
    const amount = value;
    if (value < 0) setValue(0);
    console.log(value);
    async function buy() {
        const tx = await (0,_Functions__WEBPACK_IMPORTED_MODULE_3__/* .comprarTicket */ .UT)(eventContract, id, amount);
        await tx.wait(1);
        (0,_Functions__WEBPACK_IMPORTED_MODULE_3__/* .balanceOfUsd */ .TD)(adress).then((response)=>setUsd(Number(response))).catch((err)=>console.log(err));
        const data = await (0,_Functions__WEBPACK_IMPORTED_MODULE_3__/* .balanceOf1155 */ .n4)(enterpriseAdress, id, eventContract);
        setQuantity(Number(data));
    }
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const data = _helpers_StorageHelper__WEBPACK_IMPORTED_MODULE_4__/* .StorageHelper.getItem */ .c.getItem("adress");
        (0,_Functions__WEBPACK_IMPORTED_MODULE_3__/* .balanceOfUsd */ .TD)(data).then((response)=>setUsd(Number(response))).catch((err)=>console.log(err));
        (0,_Functions__WEBPACK_IMPORTED_MODULE_3__/* .balanceOf1155 */ .n4)(enterpriseAdress, id, eventContract).then((response)=>setQuantity(Number(response))).catch((err)=>console.log(err));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "fixed h-screen w-screen bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-50",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon_Close__WEBPACK_IMPORTED_MODULE_9__/* .Close */ .x, {
                    className: "absolute top-16 right-[32%] cursor-pointer",
                    onClick: onClick
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "h-[90vh] w-[40%] flex flex-col gap-4 px-20 p-8 bg-brand-primary rounded-2xl border border-[rgba(255,255,255,.3)]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            height: 1000,
                            width: 1000,
                            src: "/previewModal.png",
                            alt: "preview",
                            className: "w-[100%]"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center w-full justify-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Title__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .D, {
                                    color: "white",
                                    className: "text-lg font-bold",
                                    children: "Ticket Espectador"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Title__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .D, {
                                    color: "white",
                                    className: "text-lg font-bold",
                                    children: "$100"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon_Map__WEBPACK_IMPORTED_MODULE_7__/* .Map */ .D, {}),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Title__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .D, {
                                    className: "text-[rgba(255,255,255,.7)] font-medium",
                                    children: [
                                        "Evento presencial em",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "border-b border-brand-text text-brand-text",
                                            children: "Igloo Network - S\xe3o Paulo, SP"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon_Clock__WEBPACK_IMPORTED_MODULE_6__/* .Clock */ .S, {}),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Title__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .D, {
                                    className: "text-[rgba(255,255,255,.7)] font-medium",
                                    children: [
                                        "31 mar - 2023 • 11:52 ",
                                        ">",
                                        " 17 abr - 2023 • 11:00"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bg-[#26252F] text-[rgba(255,255,255,.7)] rounded-lg flex items-center justify-between gap-2 w-[70%] h-12 p-3 border border-[rgba(255,255,255,.3)]",
                                    children: [
                                        "USD ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: usd
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bg-[#26252F] text-[rgba(255,255,255,.7)] rounded-lg flex items-center gap-2 w-[70%] h-12 p-3 border border-[rgba(255,255,255,.3)]",
                                    children: [
                                        "Token beneficiente",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            src: "/verificado.png",
                                            alt: "verificado",
                                            height: 1000,
                                            width: 1000,
                                            className: "w-3"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-[#1B1A26] text-[rgba(255,255,255,.7)] rounded-lg flex flex-col items-start gap-4 w-full h-full border border-[rgba(255,255,255,.3)]",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full h-14 bg-[#26252F] rounded-t-lg flex items-center justify-between border-b px-4 border-[rgba(255,255,255,.3)]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Title__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .D, {
                                            color: "white",
                                            className: "font-medium",
                                            children: "Ingressos restantes"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Title__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .D, {
                                            color: "white",
                                            className: "font-medium",
                                            children: quantity
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full flex items-center justify-between px-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Title__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .D, {
                                            color: "white",
                                            className: "font-medium",
                                            children: "Qt de ingressos"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            className: "flex items-center gap-1 transition-all duration-300 ease-in-out",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `border ${value === 0 ? "border-[rgba(255,255,255,0.3)]" : "border-[rgba(255,255,255,1)]"} rounded-full w-6 h-6 flex justify-center items-center pr-[2px] cursor-pointer transition-all duration-300 ease-in-out`,
                                                    onClick: ()=>setValue(value - 1),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon_arrowdown__WEBPACK_IMPORTED_MODULE_10__/* .Arrowdown */ .Z, {
                                                        className: "rotate-90"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "rounded-full w-6 h-6 p-3 bg-transparent flex justify-center items-center border outline-none transition-all duration-300 ease-in-out",
                                                    children: value
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `border rounded-full w-6 h-6 flex justify-center items-center pl-[1px] cursor-pointer ${value != 0 && "bg-[#4C24D0]"} transition-all duration-300 ease-in-out`,
                                                    onClick: ()=>setValue(value + 1),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon_arrowdown__WEBPACK_IMPORTED_MODULE_10__/* .Arrowdown */ .Z, {
                                                        className: "-rotate-90"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex w-full justify-center items-center text-base font-normal text-[rgba(255,255,255,.7)]",
                                    children: "Vendas at\xe9 17/04/2023"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                    onClick: buy,
                                    className: "w-[80%] mb-4 text-white self-center text-lg font-normal rounded-lg outline-none border border-[rgba(255,255,255,.3)]",
                                    children: "Comprar"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 1354:
/***/ (() => {



/***/ })

};
;