/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  defangedAddress = "";
  for (let i = 0; i < address.length; i++) {
    defangedAddress += address[i] === "." ? "[.]" : address[i];
  }
  return defangedAddress;
};
