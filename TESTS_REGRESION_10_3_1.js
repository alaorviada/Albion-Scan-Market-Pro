'use strict';
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const html=fs.readFileSync(__dirname+'/www/index.html','utf8');
function extractFunction(name){
 const start=html.indexOf('function '+name+'(');assert(start>=0,'No existe '+name);
 const brace=html.indexOf('{',start);let depth=0,inString=null,escape=false;
 for(let i=brace;i<html.length;i++){const c=html[i];if(inString){if(escape)escape=false;else if(c==='\\')escape=true;else if(c===inString)inString=null;continue;}if(c==='"'||c==="'"||c==='`'){inString=c;continue;}if(c==='{')depth++;if(c==='}'&&--depth===0)return html.slice(start,i+1);}
 throw new Error('No se pudo extraer '+name);
}
const context={
 Math,Number,String,Array,Set,Date,
 CITIES:['Bridgewatch','Fort Sterling','Lymhurst','Martlock','Thetford','Caerleon','Brecilien'],
 priceKey:(id,q,city)=>`${id}|${q}|${city}`,
 dateInfo:()=>({valid:true,future:false,hours:0})
};
vm.createContext(context);
vm.runInContext(extractFunction('materialCostForVariant'),context);
const prices=new Map([
 ['WOOD|1|Caerleon',{sell_price_min:100,sell_price_min_date:'2026-11-12T10:00:00Z'}],
 ['ORE|1|Caerleon',{sell_price_min:50,sell_price_min_date:'2026-11-12T10:00:00Z'}]
]);
const variant={materials:[{id:'WOOD',qty:2,returns:true},{id:'ORE',qty:1,returns:false}]};
const r=context.materialCostForVariant(variant,prices,'Caerleon',0.1,24,true,'craft',0,5);
assert.strictEqual(r.complete,true);
assert.strictEqual(r.total,1150,'Debe sumar coste de materiales de los cinco lotes');
assert.strictEqual(r.materials[0].subtotal,180,'El desglose por material debe seguir siendo por lote de receta');
assert.strictEqual(r.sourceTransportTotal,0);
assert(html.includes('const materialUnitCost=calc.total/producedQty;'),'El coste unitario debe dividir por unidades realmente producidas');
assert(html.includes('best={assignment,external,landed,variableCost,transport};'),'La selección de fuente debe conservar coste variable separado del transporte');
console.log('OK: materiales multi-lote, RRR, separación de transporte y divisor por producción real.');
