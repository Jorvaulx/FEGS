
function handleResponse(data) {
    sessionStorage.setItem('data', data);
    var rows = d3.csv.parseRows(data);
    setFullDisplay(rows);
    setEnvironmentalArray(rows);
    setEcologicalArray(rows);
    setDirectUseArray(rows);
    setDirectUserArray(rows);
}

function setFullDisplay(data) {
    var displayColumns = [];
    console.log ('window:',window);
    console.log ('this:',this);
    console.log ('document:',document);
    displayColumns = displayColumns.concat(environmentalColumnArray, ecologicalColumnArray, directUseColumnArray, directUserColumnArray,idArrayColumn);
    sessionStorage.setItem('data', getDefinedColumns(data, displayColumns));
}

function setEnvironmentalArray(data) {
    environmentalColumnArray.push('FESID2244');
    console.log('environmentalColumnArray',environmentalColumnArray);
    var tempArray = getDefinedColumns(data, environmentalColumnArray),
        environmentalArray = [];
    tempArray.forEach(function (item, index) {
        if (index) {
            var environmentalId = item[2].split('.')[0],
                index = environmentalArray.map(function (x) {
                    return x.id
                }).indexOf(environmentalId);
            if (index == -1) {
                environmentalArray.push({
                    'id': environmentalId,
                    'environmentalClass': item[0],
                    'environmentalSubClass': item[1]
                });
            }
        }
    });
    environmentalArray.sort(function(a,b){
        var ecoClassA = a.environmentalClass.toUpperCase();
        var ecoClassB = b.environmentalClass.toUpperCase();
        var ecoSubClassA = a.environmentalSubClass.toUpperCase();
        var ecoSubClassB = b.environmentalSubClass.toUpperCase();
        if (ecoClassA < ecoClassB) {
            return -1;
        }
        if (ecoClassA > ecoClassB) {
            return 1;
        }
        if (ecoSubClassA < ecoSubClassB) {
            return -1;
        }
        if (ecoSubClassA > ecoSubClassB) {
            return 1;
        }

        // names must be equal
        return 0;

    });
    console.log('environmentalArray',environmentalArray);
}

function setEcologicalArray(data) {
    ecologicalColumnArray.push('FESID2244');
    console.log('ecologicalColumnArray',ecologicalColumnArray);
    var tempArray = getDefinedColumns(data, ecologicalColumnArray),
        ecologicalArray = [];
    tempArray.forEach(function (item, index) {
        if (index) {
            var ecologicalId = item[2].split('.')[1],
                index = ecologicalArray.map(function (x) {
                    return x.id
                }).indexOf(ecologicalId);
            if (index == -1) {
                ecologicalArray.push({
                    'id': ecologicalId,
                    'ecologicalClass': item[0],
                    'ecologicalSubClass': item[1]
                });
            }
        }
    });
    ecologicalArray.sort(function(a,b){
        var ecoClassA = a.ecologicalClass.toUpperCase();
        var ecoClassB = b.ecologicalClass.toUpperCase();
        var ecoSubClassA = a.ecologicalSubClass.toUpperCase();
        var ecoSubClassB = b.ecologicalSubClass.toUpperCase();
        if (ecoClassA < ecoClassB) {
            return -1;
        }
        if (ecoClassA > ecoClassB) {
            return 1;
        }
        if (ecoSubClassA < ecoSubClassB) {
            return -1;
        }
        if (ecoSubClassA > ecoSubClassB) {
            return 1;
        }

        // names must be equal
        return 0;

    });
    console.log('ecologicalArray',ecologicalArray);
}


function setDirectUseArray(data) {
    directUseColumnArray.push('FESID2244');
    console.log('directUseColumnArray',directUseColumnArray);
    var tempArray = getDefinedColumns(data, directUseColumnArray),
        directUseArray = [];
    tempArray.forEach(function (item,index) {
        if (index) {
            var directUseId = item[3].split('.')[2],
                index = directUseArray.map(function (x) {
                    return x.id
                }).indexOf(directUseId);
            if (index == -1) {
                directUseArray.push({
                    'id': directUseId,
                    'directUseClass': item[0],
                    'directUseSubClassI': item[1],
                    'directUseSubClassII': item[2]
                });
            }
        }
    });
    directUseArray.sort(function(a,b){
        var ecoClassA = a.directUseClass.toUpperCase();
        var ecoClassB = b.directUseClass.toUpperCase();
        var ecoSubIClassA = a.directUseSubClassI.toUpperCase();
        var ecoSubIClassB = b.directUseSubClassI.toUpperCase();
        var ecoSubIIClassA = a.directUseSubClassII.toUpperCase();
        var ecoSubIIClassB = b.directUseSubClassII.toUpperCase();
        if (ecoClassA < ecoClassB) {
            return -1;
        }
        if (ecoClassA > ecoClassB) {
            return 1;
        }
        if (ecoSubIClassA < ecoSubIClassB) {
            return -1;
        }
        if (ecoSubIClassA > ecoSubIClassB) {
            return 1;
        }
        if (ecoSubIIClassA < ecoSubIIClassB) {
            return -1;
        }
        if (ecoSubIIClassA > ecoSubIIClassB) {
            return 1;
        }

        // names must be equal
        return 0;

    });
    console.log('directUseArray',directUseArray);
}

function setDirectUserArray(data) {
    directUserColumnArray.push('FESID2244');
    console.log('directUserColumnArray',directUserColumnArray);
    var tempArray = getDefinedColumns(data, directUserColumnArray),
        directUserArray = [];
    tempArray.forEach(function (item,index) {
        if (index) {
            var directUserId = item[3].split('.')[3],
                index = directUserArray.map(function (x) {
                    return x.id
                }).indexOf(directUserId);
            if (index == -1) {
                directUserArray.push({
                    'id': directUserId,
                    'directUserClass': item[0],
                    'directUserSubClassI': item[1],
                    'directUserSubClassII': item[2]
                });
            }
        }
    });
    directUserArray.sort(function(a,b){
        var ecoClassA = a.directUserClass.toUpperCase();
        var ecoClassB = b.directUserClass.toUpperCase();
        var ecoSubIClassA = a.directUserSubClassI.toUpperCase();
        var ecoSubIClassB = b.directUserSubClassI.toUpperCase();
        var ecoSubIIClassA = a.directUserSubClassII.toUpperCase();
        var ecoSubIIClassB = b.directUserSubClassII.toUpperCase();
        if (ecoClassA < ecoClassB) {
            return -1;
        }
        if (ecoClassA > ecoClassB) {
            return 1;
        }
        if (ecoSubIClassA < ecoSubIClassB) {
            return -1;
        }
        if (ecoSubIClassA > ecoSubIClassB) {
            return 1;
        }
        if (ecoSubIIClassA < ecoSubIIClassB) {
            return -1;
        }
        if (ecoSubIIClassA > ecoSubIIClassB) {
            return 1;
        }

        // names must be equal
        return 0;

    });
    console.log('directUserArray',directUserArray);
}



function getDefinedColumns(data, displayColumns) {
    var columns = [], results = [];
    displayColumns.forEach(function (item) {
        var index = data[0].indexOf(item);
        columns.push(index);
    });
    console.log('columns',columns);
    data.forEach (function(item){
        var row = [];
        columns.forEach(function(index){
            row.push(item[index]);
        });
        results.push(row);
    });

    return results;
}