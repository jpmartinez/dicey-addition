import merge from "deepmerge";

const defaultOptions = {
  arrayMerge: (destinationArray, sourceArray) => sourceArray
};

export const overWriteMerge = (destinationArray, sourceArray, options) => sourceArray;

export default (x, y, options) => merge(x, y, Object.assign({}, options, defaultOptions));
