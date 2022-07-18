import * as tf from '@tensorflow/tfjs';
import * as Papa from 'papaparse';


Papa.parsePromise=function(file){
  return new Promise (function(complete,error){
      Papa.parse(file,{
          header:true,
          download:true,
          dynamicTyping:true,
          complete,
          error
      });
  });
};

const prepareData = async () => {
  const csv = await Papa.parsePromise(
    "train.csv"
  );
  
  return csv.data;
}

const oneHot = (val, categoryCount) =>
Array.from(tf.oneHot(val, categoryCount).dataSync())

const normalize = tensor =>
tf.div(
    tf.sub(tensor, tf.min(tensor)),
     tf.sub(tf.max(tensor), tf.min(tensor))
  )
  const VARIABLE_CATEGORY_COUNT = {
      OverallQual: 10,
      GarageCars: 5,
      FullBath: 4,
    }
const createDataSets = (data, features, categoricalFeatures, testSize) => {
  const X = data.map(r =>
    features.flatMap(f => {
      if (categoricalFeatures.has(f)) {
        return oneHot(!r[f] ? 0 : r[f], VARIABLE_CATEGORY_COUNT[f])
      }
      return !r[f] ? 0 : r[f]
    })
  )
  const X_t = normalize(tf.tensor2d(X))
  const y = tf.tensor(data.map(r => (!r.SalePrice ? 0 : r.SalePrice)))
  const splitIdx = parseInt((1 - testSize) * data.length, 10)
  const [xTrain, xTest] = tf.split(X_t, [splitIdx, data.length - splitIdx])
  const [yTrain, yTest] = tf.split(y, [splitIdx, data.length - splitIdx])
  return [xTrain, xTest, yTrain, yTest]
}
const run =async ()=>{
  const data = await prepareData()
  const features = [
      "OverallQual",
      "GrLivArea",
      "GarageCars",
      "TotalBsmtSF",
      "FullBath",
      "YearBuilt",
    ]
    const categoricalFeatures = new Set(["OverallQual", "GarageCars", "FullBath"])    
    return [xTrain, xTest, yTrain, yTest] = createDataSets(data,features,categoricalFeatures,0.1 );  
    
};
const [xTrain, xTest, yTrain, yTest]=run()
console.log(xTrain.shape,xTest.hape,yTrain,yTest)


if(document.readyState!=='loading'){
  run();
}else{
  document.addEventListener("DomContentLoaded",run)
}