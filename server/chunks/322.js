"use strict";
exports.id = 322;
exports.ids = [322];
exports.modules = {

/***/ 9322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TD": () => (/* binding */ balanceOfUsd),
/* harmony export */   "UT": () => (/* binding */ comprarTicket),
/* harmony export */   "Z6": () => (/* binding */ resgatarRecompensaUsuario),
/* harmony export */   "n4": () => (/* binding */ balanceOf1155)
/* harmony export */ });
/* unused harmony exports getUserProvider, getProvider, permissaoUsd, permissao1155, criarEvento, verInventarioDeEventos, verCriadores, createTicket, mudarValorDoTicket, verDonoDaColecao, verStatusDoTicket, verPoolDeRecompensa, abrirParaVenda, abrirSaqueDeRecompensas, verControleDeRecompensa, verControleDeVenda, mudarUriDaColeção, verUriDoContrato, verUriDoToken */
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1347);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);

let userAddress;
//contratos
let usdtContract = "0x1117e97C3b72B9723efC6875F37b9dF670F0eDCB";
let marketplaceContract = "0x4a76e13F2182f8588fE354636899eDE070AEd8f6";
let factoryContract = "0x457CBf316309f3D903d17540B1E065220fb038b9";
//funçoes
//usd
const increaseAllowanceFunction = "function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool)";
//1155
const setApprovalForAllFunction = "function setApprovalForAll(address operator, bool approved) external";
//factory
const createEventFunction = "function createEvent(address owner_, string memory name_, string memory symbol_, string memory contractURI_) external";
const viewEventInventoryFunction = "function viewEventInventory(address owner_) public view returns(address[] memory)";
const viewCreatorsFunction = "function viewCreators() public view returns(address[] memory)";
//evento
const createTicketFunction = "function createTicket(uint totalSupply_, string memory uri_, uint price_, bool benificent_)external";
const viewOwnerFunction = "function viewOwner() public view returns(address)";
const viewTicketStatusFunction = "function viewTicketStatus(uint id_) public view returns(uint totalSupply, uint ticketPrice, bool isBenificent)";
const viewPrizePoolFunction = "function viewPrizePool() public view returns(uint prizePercentage, uint amountEarned,  uint totalTickets)";
const openSellFunction = "function openSell() external";
const openPrizeFunction = "function openPrize() external";
const reedemPrizeFunction = "function reedemPrize(uint id_) external";
const reedemPrizeRoyaltsFunction = "function reedemPrizeRoyalts() external";
const viewPrizeControlFunction = "function viewPrizeControl() public view returns(bool)";
const viewSellControlFunction = "function viewSellControl() public view returns(bool)";
const setContractURIFunction = "function setContractURI(string memory _uri) public onlyOwner()";
const contractURIFunction = "function contractURI() public view returns (string memory)";
const uriFunction = "function uri(uint256 _id) public view override returns (string memory)";
const changeTicketPriceFunction = "function changeTicketPrice(uint id_, uint price_) external";
const customWindow = window;
//marketplcae
const buyTicketFunction = "function buyTicket(address collection_, uint id_, uint amount_)external";
/* export async function login() {
  let accounts = await ethereum.requires({ method: "eth_requestAccounts" });
  userAddress = accounts[0];
} */ function getUserProvider() {
    if (!customWindow.ethereum) {
        console.log("!metamask");
    }
    const provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.Web3Provider(customWindow.ethereum);
    return provider;
}
function getProvider() {
    let url = "https://alfajores-forno.celo-testnet.org";
    const provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.JsonRpcProvider(url);
    return provider;
}
async function permissaoUsd(spender, amount) {
    const provider = getUserProvider();
    const signer = provider.getSigner();
    const contract = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(usdtContract, [
        increaseAllowanceFunction
    ], provider);
    const contractSigner = contract.connect(signer);
    const amount1 = ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.utils.parseUnits(amount);
    const tx = await contractSigner.increaseAllowance(spender, amount1.toString());
    console.log(amount1.toString());
    await tx.wait(1);
    console.log(tx);
    return tx;
}
async function permissao1155(contract, spender, bool) {
    const provider = getUserProvider();
    const signer = provider.getSigner();
    const contract1 = new ethers.Contract(contract, [
        setApprovalForAllFunction
    ], provider);
    const contractSigner = contract1.connect(signer);
    const tx = await contractSigner.setApprovalForAll(spender, bool);
    await tx.wait(1);
    console.log(tx);
    return tx;
}
//funcoes do factory
//dono dar permissao no contrato do evento para o marketplace permissao1155()
//dono dar allowance alto no usdt ao contrato do evento para podermos sacar os tokens depois
async function criarEvento(owner, name, symbol, contractURI) {
    const provider = getUserProvider();
    const signer = provider.getSigner();
    const contract = new ethers.Contract(factoryContract, [
        createEventFunction
    ], provider);
    const contractSigner = contract.connect(signer);
    console.log(ethers.utils.parseUnits("10"));
    permissaoUsd(factoryContract, ethers.utils.parseUnits("10"));
    const tx = await contractSigner.createEvent(owner, name, symbol, contractURI);
    await tx.wait(1);
    console.log(tx);
    return tx;
}
async function verInventarioDeEventos(address) {
    const provider = getProvider();
    const contract = new ethers.Contract(factoryContract, [
        viewEventInventoryFunction
    ], provider);
    const tx = await contract.viewEventInventory(address);
    console.log(tx);
    return tx;
}
async function verCriadores() {
    const provider = getProvider();
    const contract = new ethers.Contract(factoryContract, [
        viewCreatorsFunction
    ], provider);
    const tx = await contract.viewCreators();
    console.log(tx);
    return tx;
}
//funções do evento
async function createTicket(eventContract, totalSupply, uri, price, benificent) {
    const provider = getUserProvider();
    const signer = provider.getSigner();
    const contract = new ethers.Contract(eventContract, [
        createTicketFunction
    ], provider);
    const contractSigner = contract.connect(signer);
    const tx = await contractSigner.createTicket(totalSupply, uri, ethers.utils.parseUnits(price), benificent);
    console.log(tx);
    return tx;
}
async function mudarValorDoTicket(eventContract, id, price) {
    const provider = getUserProvider();
    const signer = provider.getSigner();
    const contract = new ethers.Contract(eventContract, [
        changeTicketPriceFunction
    ], provider);
    const contractSigner = contract.connect(signer);
    const tx = await contractSigner.changeTicketPrice(id, ethers.utils.parseUnits(price));
    console.log(tx);
    return tx;
}
async function verDonoDaColecao(contract) {
    const provider = getProvider();
    const contract1 = new ethers.Contract(contract, [
        viewOwnerFunction
    ], provider);
    const tx = await contract1.viewOwner();
    console.log(tx);
    return tx;
}
async function verStatusDoTicket(contract, nftId) {
    const provider = getProvider();
    const contract1 = new ethers.Contract(contract, [
        viewTicketStatusFunction
    ], provider);
    const tx = await contract1.viewTicketStatus(nftId);
    console.log(tx);
    return tx; // uint totalSupply, uint ticketPrice, bool isBenificent
}
async function verPoolDeRecompensa(contract) {
    const provider = getProvider();
    const contract1 = new ethers.Contract(contract, [
        viewPrizePoolFunction
    ], provider);
    const tx = await contract1.viewPrizePool();
    console.log(tx);
    return tx; // uint prizePercentage, uint amountEarned,  uint totalTickets
}
async function abrirParaVenda(contract) {
    const provider = getUserProvider();
    const signer = provider.getSigner();
    const contract1 = new ethers.Contract(contract, [
        openSellFunction
    ], provider);
    const contractSigner = contract1.connect(signer);
    const tx = await contractSigner.openSell();
    console.log(tx);
    return tx;
}
async function abrirSaqueDeRecompensas(contract) {
    const provider = getUserProvider();
    const signer = provider.getSigner();
    const contract1 = new ethers.Contract(contract, [
        openPrizeFunction
    ], provider);
    const contractSigner = contract1.connect(signer);
    const tx = await contractSigner.openPrize();
    console.log(tx);
    return tx;
}
async function resgatarRecompensaUsuario(id, contract) {
    const provider = getUserProvider();
    const signer = provider.getSigner();
    const contract1 = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(contract, [
        reedemPrizeFunction
    ], provider);
    const contractSigner = contract1.connect(signer);
    const tx = await contractSigner.reedemPrize(id);
    return tx;
}
/* export async function resgatarRecompensaRoyalts(contract: any) {
  const provider = getUserProvider();
  const signer = provider.getSigner();

  const contract1 = new ethers.Contract(
    contract,
    [reedemPrizeRoyaltsFunction],
    provider
  );
  const contractSigner = contract1.connect(signer);

  const tx = await contractSigner.reedemPrizeRoyalts(id);

  console.log(tx);
  return tx;
} */ async function verControleDeRecompensa(contract) {
    const provider = getProvider();
    const contract1 = new ethers.Contract(contract, [
        viewPrizeControlFunction
    ], provider);
    const tx = await contract1.viewPrizeControl();
    console.log(tx);
    return tx;
}
async function verControleDeVenda(contract) {
    const provider = getProvider();
    const contract1 = new ethers.Contract(contract, [
        viewSellControlFunction
    ], provider);
    const tx = await contract1.viewSellControl();
    console.log(tx);
    return tx;
}
async function mudarUriDaColeção(contract, uri) {
    const provider = getUserProvider();
    const signer = provider.getSigner();
    const contract1 = new ethers.Contract(contract, [
        setContractURIFunction
    ], provider);
    const contractSigner = contract1.connect(signer);
    const tx = await contractSigner.setContractURI(uri);
    console.log(tx);
    return tx;
}
async function verUriDoContrato(contract) {
    const provider = getProvider();
    const contract1 = new ethers.Contract(contract, [
        contractURIFunction
    ], provider);
    const tx = await contract1.contractURI();
    console.log(tx);
    return tx;
}
async function verUriDoToken(contract, nftId) {
    const provider = getProvider();
    const contract1 = new ethers.Contract(contract, [
        uriFunction
    ], provider);
    const tx = await contract1.uri(nftId);
    console.log(tx);
    return tx;
}
async function comprarTicket(eventContract, id, amount) {
    const provider = getUserProvider();
    const signer = provider.getSigner();
    const contractEvent = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(eventContract, [
        viewTicketStatusFunction
    ], provider);
    const nftStatus = contractEvent.viewTicketStatus(id);
    permissaoUsd(marketplaceContract, Number(nftStatus.ticketPrice) * amount);
    const contractMktp = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(marketplaceContract, [
        buyTicketFunction
    ], provider);
    const contractSigner = contractMktp.connect(signer);
    const tx = await contractSigner.buyTicket(eventContract, id, amount);
    console.log(tx);
    return tx;
}
async function balanceOfUsd(adress) {
    const provider = getProvider();
    const function2 = "function balanceOf(address account) public view virtual override returns (uint256)";
    const contract1 = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(usdtContract, [
        function2
    ], provider);
    const tx = await contract1.balanceOf(adress);
    return ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.utils.formatEther(tx.toString());
}
async function balanceOf1155(adress, id, contrat) {
    const provider = getProvider();
    const function2 = "function balanceOf(address account, uint256 id) external view returns (uint256)";
    const contract1 = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(contrat, [
        function2
    ], provider);
    const tx = await contract1.balanceOf(adress, id);
    console.log(tx);
    return tx.toString();
}


/***/ })

};
;