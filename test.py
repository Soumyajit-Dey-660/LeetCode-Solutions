def timepass(s, indices):
    result = ' '*len(indices)
    for ind, letter in enumerate(s):
        result = result[:indices[ind]] + letter + result[indices[ind]:]
        print(result)
    result = result.replace(' ', '')
    return result

print(timepass("codeleet", [4,5,6,7,0,2,1,3]))