let tamRackDefault = [3,5,7,8,9,10,12,16,20,24,28,32,36,40,44,48]
let cxsCabo = 0
let RJ45Femea = 0
let espelhos = 0
let patchCord = 0
let patchPanel = 0
let sswitch = 0
let organizador = 0
let bandejaFixa = 0
let patchCable = 0
let nRack = 0
let mRack = 0
let exaustor = 0


function cabeamentoRede () {
    let medidaMH = document.getElementById("m-mh").value
    let nPavimentos = document.getElementById("n-pavimentos").value
    let nPontosTelecom = document.getElementById("n-pontos").value * 2

    cxsCabo = Math.ceil(nPontosTelecom * nPavimentos * medidaMH / 305)
    RJ45Femea = nPontosTelecom * nPavimentos
    espelhos = Math.ceil(nPontosTelecom * nPavimentos / 2) 
    patchCord = nPontosTelecom * nPavimentos
    patchPanel = Math.ceil(nPontosTelecom/24) * nPavimentos
    sswitch = patchPanel
    organizador = patchPanel * 2
    bandejaFixa = nPavimentos
    patchCable = patchCord
    nRack = nPavimentos - 1
    mRack = Math.round((patchPanel + sswitch + organizador + 1 + 2) * 1.5) //1=bandeja 2=n de exaustor p/ rack
    for(let tamRack of tamRackDefault) {
        if(tamRack >= mRack) {
            mRack = tamRack
            break;
        }
        mRack = tamRack
    }
    exaustor = nRack * 2
}

let medidaFOMMIG = 0
let nDIO = 0
let nAcopladorMM = 0
let nAcopladorSM = 0
let bandejaEmenda = 0
let terminadorOptico = 0
let pigTailTO = 0
let pigTailDioMM = 0
let cordaoOpticoMM = 0
let pigTailDioSM = 0
let cordaoOpticoSM = 0
let nFibras = 0

function backboneoptico (){
    nFibras = document.getElementById("n-fibras").value
    let nPavimentos = document.getElementById("n-pavimentos").value
    let mPavimentos = document.getElementById("m-pavimentos").value

    let radioButtons = document.querySelectorAll('input[name="backbone"]');
            let selectedExistencia;
            for (let radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedExistencia = radioButton.value;
                    break;
                }
            }

     let radioButt = document.querySelectorAll('input[name="backbone-sec"]');
            let selectedBacSec;
            for (let radioButton of radioButt) {
                if (radioButton.checked) {
                    selectedBacSec = radioButton.value;
                    break;
                }
            }  

          
    
    medidaFOMMIG = ((((1*nPavimentos)+1+3) * ((1*nPavimentos)-1)/2)*1*mPavimentos)*1.2
    if(selectedBacSec == "sim") {
        nDIO = Math.ceil(nFibras * (nPavimentos - 1) / 24)
    } 
    if(selectedExistencia == "sim") {
        nDIO += Math.ceil(nFibras/24)
    }

    nAcopladorMM = Math.ceil(nFibras * (nPavimentos - 1) / 2)
    nAcopladorSM = nFibras/2

    terminadorOptico = nPavimentos - 1
    
    pigTailDioMM = nFibras * (nPavimentos - 1)
    pigTailTO = Math.ceil(nFibras * (nPavimentos - 1) / 2)
    cordaoOpticoMM = Math.ceil(nFibras * nPavimentos / 2)
    

    if(selectedExistencia == "sim") {
        pigTailDioSM = nFibras
        cordaoOpticoSM = Math.ceil(nFibras/2)
    }
    nEtiquetaPigtails = Math.ceil(nAcopladorSM + pigTailTO + cordaoOpticoSM)
    nEtiquetasDio=cordaoOpticoMM + (cordaoOpticoSM*2)

    bandejaEmenda = Math.ceil(pigTailDioMM/12) + Math.ceil(pigTailDioSM/12)
}

let nEtiquetaportaPP = 0
let nEttiquetaPC = 0
let nEtiquetaPP = 0
let nEtiquetaTomadas = 0
let nEtiquetaCabos = 0
let nEtiquetaPigtails = 0
let nEtiquetasDio = 0
let nAbracadeiras = 0
let nReguaTomadas = 0
let nPorcaGaiola = 0

function miscelanias (){
    let nPavimentos = document.getElementById("n-pavimentos").value
    let nPontosTelecom = document.getElementById("n-pontos").value * 2
    nEtiquetaportaPP = nPontosTelecom * nPavimentos
    nEttiquetaPC = nPontosTelecom * nPavimentos
    nEtiquetaPP = Math.ceil(nPontosTelecom/24) * nPavimentos
    nEtiquetaTomadas = Math.ceil( (nPontosTelecom * nPavimentos / 2) + nPontosTelecom * nPavimentos)
    nEtiquetaCabos = nPontosTelecom * nPavimentos
    nAbracadeiras = Math.ceil( (nPontosTelecom * nPavimentos / 2) + nPontosTelecom * nPavimentos)
    nReguaTomadas = nPontosTelecom/ 4
    nRack = nPavimentos - 1
    mRack = Math.round((patchPanel + sswitch + organizador + 1 + 2) * 1.5) //1=bandeja 2=n de exaustor p/ rack
    for(let tamRack of tamRackDefault) {
        if(tamRack >= mRack) {
            mRack = tamRack
            break;
        }
        mRack = tamRack
    }
    nPorcaGaiola = Math.ceil((mRack*nRack)/10)


}

function createTable (){
    let categoria = document.getElementById("cat-cabo").value;
    cabeamentoRede()
    miscelanias()
    backboneoptico()

    let result = document.querySelector("#result")
    result.innerHTML = [
        '<table>',
        '<thead>',
        '<tr>',
        '<th colspan="3">MATERIAIS DE CABEAMENTO DE REDE (INFRAESTRUTURA)</th>',
        '</tr>',
        '</thead>',
        '<thead>',
        '<tr>',
        '<th>Descrição</th>',
        '<th>Medida</th>',
        '<th>Quantidade</th>',
        '</tr>',
        '</thead>',
        '<tbody>',
        '<tr>',
        '<td>Cabo UTP par trançado categoria' + categoria + '(MH)</td>',
        '<td>caixas</td>',
        '<td>' + cxsCabo + '</td>',
        '</tr>',
        '<tr>',
        '<td>Tomada RJ45 femêa categoria ' + categoria + ' </td>',
        '<td>unidades</td>',
        '<td>' + RJ45Femea + '</td>',
        '</tr>',
        '<tr>',
        '<td>Espelhos 4x4 - 2 furações/entradas</td>',
        '<td>unidade</td>',
        '<td>' + espelhos + '</td>',
        '</tr>',
        '<tr>',
        '<td>Patch Cord cat.' + categoria + ', 3m</td>',
        '<td>unidade</td>',
        '<td>' + patchCord  + '</td>',
        '</tr>',
        '<tr>',
        '<td>Patch Panel cat.' + categoria + ', 24 portas</td>',
        '<td>unidade</td>',
        '<td>' + patchPanel + '</td>',
        '</tr>',
        '<tr>',
        '<td>Organizador de cabo frontal - 1U</td>',
        '<td>unidade</td>',
        '<td>' + organizador + '</td>',
        '</tr>',
        '<tr>',
        '<td>Bandeja fixa</td>',
        '<td>unidade</td>',
        '<td>' + bandejaFixa + '</td>',
        '</tr>',
        '<tr>',
        '<td>Patch Cable cat.' + categoria + ' - 2,5m</td>',
        '<td>unidade</td>',
        '<td>' + patchCable + '</td>',
        '</tr>',
        '<tr>',
        '<td>Rack fechado, tamanho' + mRack + '</td>',
        '<td>unidade</td>',
        '<td>' + nRack + '</td>',
        '</tr>',
        '<tr>',
        '<td>Exaustor 19"</td>',
        '<td>unidade</td>',
        '<td>' + exaustor + '</td>',
        '</tr>',
        '<thead>',
        '<tr>',
        '<th colspan="3">Backbone Óptico</th>',
        '</tr>',
        '</thead>',
        '<thead>',
        '<tr>',
        '<th>Descrição</th>',
        '<th>Medida</th>',
        '<th>Quantidade</th>',
        '</tr>',
        '</thead>',
        '<tr>',
        '<td>Cabo de Fibra Óptica Tight Buffer (FOMMIG) 50 x 125µm - com ' + nFibras + ' fibras</td>',
        '<td>metros</td>',
        '<td>' + medidaFOMMIG + '</td>',
        '</tr>',
        '<tr>',
        '<td>Chassi DIO (Distribuido Interno Óptico) com 24 portas - 1U - 19"</td>',
        '<td>unidade</td>',
        '<td>' + nDIO + '</td>',
        '</tr>',
        '<tr>',
        '<td>Acoplador óptico 50 x 125µm - MM - LC - duplo</td>',
        '<td>unidade</td>',
        '<td>' + nAcopladorMM + '</td>',
        '</tr>',
        '<tr>',
        '<td>Bandeja para emenda de fibra no DIO - (comporta até 12 emendas)</td>',
        '<td>unidade</td>',
        '<td>' + bandejaEmenda + '</td>',
        '</tr>',
        '<tr>',
        '<td>Terminador Óptico para 8 fibras</td>',
        '<td>unidade</td>',
        '<td>' + terminadorOptico + '</td>',
        '</tr>',
        '<tr>',
        '<td>Pig tail 50 x 125µm - MM - 1,5m - simples - conector LC</td>',
        '<td>unidade</td>',
        '<td>' + pigTailDioMM + '</td>',
        '</tr>',
        '<tr>',
        '<td>Pig tail 50 x 125µm - MM - 3,0m - duplo - conector LC</td>',
        '<td>unidade</td>',
        '<td>' + pigTailTO + '</td>',
        '</tr>',
        '<tr>',
        '<td>Cordão Óptico 50 x 125µm - MM - 3m - duplo - conector LC</td>',
        '<td>unidade</td>',
        '<td>' + cordaoOpticoMM + '</td>',
        '</tr>',
        '<tr>',
        '<td>Pig tail 50 x 125µm - SM - 1,5m - simples - conector LC</td>',
        '<td>unidade</td>',
        '<td>' + pigTailDioSM + '</td>',
        '</tr>',
        '<tr>',
        '<td>Cordão Óptico 9 x 125µm - SM - 3m - duplo - conector LC</td>',
        '<td>unidade</td>',
        '<td>' + pigTailDioSM + '</td>',
        '</tr>',
        '<thead>',
        '<tr>',
        '<th colspan="3">MISCELÂNEA</th>',
        '</tr>',
        '</thead>',
        '<thead>',
        '<tr>',
        '<th>Descrição</th>',
        '<th>Medida</th>',
        '<th>Quantidade</th>',
        '</tr>',
        '</thead>',
        '<tr>',
        '<td>Etiquetas de identficação da porta do Patch Panel</td>',
        '<td>unidade</td>',
        '<td>' + nEtiquetaportaPP + '</td>',
        '</tr>',
        '<tr>',
        '<td>Etiquetas de identficação Patch Cable</td>',
        '<td>unidade</td>',
        '<td>' + nEttiquetaPC + '</td>',
        '</tr>',
        '<tr>',
        '<td>Etiquetas de identficação do Patch Panel</td>',
        '<td>unidade</td>',
        '<td>' + nEtiquetaPP + '</td>',
        '</tr>',
        '<tr>',
        '<td>Etiquetas de identificação Tomadas e Espelhos</td>',
        '<td>unidade</td>',
        '<td>' + nEtiquetaTomadas + '</td>',
        '</tr>',
        '<tr>',
        '<td>Etiquetas de identificação Cabos UTP - MH</td>',
        '<td>unidade</td>',
        '<td>' + nEtiquetaCabos + '</td>',
        '</tr>',
        '<tr>',
        '<td>Etiqueta para os cordões ópticos e pigtails (TO)</td>',
        '<td>unidade</td>',
        '<td>' + nEtiquetaPigtails + '</td>',
        '</tr>',
        '<tr>',
        '<td>Etiqueta para Portas do DIO</td>',
        '<td>unidade</td>',
        '<td>' + nEtiquetasDio + '</td>',
        '</tr>',
        '<tr>',
        '<td>Abraçadeiras plásticas, pacote 100 unidades</td>',
        '<td>pacote</td>',
        '<td>' + nAbracadeiras + '</td>',
        '</tr>',
        '<tr>',
        '<td>Régua com 6 tomadas - filtro de linha</td>',
        '<td>unidade</td>',
        '<td>' + nReguaTomadas + '</td>',
        '</tr>',
        '<tr>',
        '<td>Porca Gaiola - pacote com 10 unidades</td>',
        '<td>unidade</td>',
        '<td>' + nPorcaGaiola + '</td>',
        '</tr>',
        '</tbody>',
        '</table>'
      ].join("\n");
}