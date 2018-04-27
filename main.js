function handleResponse(data) {
    sessionStorage.setItem('data', data);
    var rows = d3.csv.parseRows(data);
    setFullDisplay(rows);
    setEnvironmentalArray(rows);
    setEcologicalArray(rows);
    setDirectUseArray(rows);
    setDirectUserArray(rows);
    setUpSelect2('ecological', JSON.parse(sessionStorage.getItem('ecologicalArray')));
    setUpSelect2('environmental', JSON.parse(sessionStorage.getItem('environmentalArray')));
    setUpSelect2('directUse', JSON.parse(sessionStorage.getItem('directUseArray')));
    setUpSelect2('directUser', JSON.parse(sessionStorage.getItem('directUserArray')));
    // Disable Add Button on Load
    jQuery('#addEvent').addClass('disabled');

    jQuery('.confirm').click(handleNameConfirmation)
    // Clean validation and input on close
    jQuery('#nameModal').on('hide.bs.modal',function(){
        console.log('clean');
        jQuery('[validation=nameFilteredItem]').html('');
        jQuery('#nameFilteredItem').val('');
    })
}

function setFullDisplay(data) {
    var displayColumns = [];
    displayColumns = displayColumns.concat(environmentalColumnArray, ecologicalColumnArray, directUseColumnArray, directUserColumnArray, idArrayColumn);
    sessionStorage.setItem('data', getDefinedColumns(data, displayColumns));
}

function addEvent(event) {
    console.log('addEvent Click', event);
    var add = true;

    //Run Validation
    ['ecological', 'environmental', 'directUse', 'directUser'].forEach(function (item) {
        console.log('jQuery(\'#' + item + '\').val()', jQuery('#' + item).val());
        var validation = jQuery('[validation=' + item + ']');
        if (!jQuery('#' + item).val()) {
            validation.html(capitalizeFirstLetter(item) + ' is required');
            add = false;
        } else
            validation.html('');
    });
    if (add)
        jQuery('#nameModal').modal('show');

}

function handleNameConfirmation(event) {
    event.propertyIsEnumerable();
    console.log('handleNameConfirmation', jQuery("#nameFilteredItem").val());
    if (!jQuery("#nameFilteredItem").val().trim().length) {
        jQuery('[validation=nameFilteredItem]').html('Please enter name for filter');
    } else {
        setValue();
        jQuery('#nameModal').modal('hide');
    }
}

function setValue() {
    var retrieveFromSession = sessionStorage.getItem('resultList'),
        results = JSON.parse(retrieveFromSession)||[],
        result = {};
    ['ecological', 'environmental', 'directUse', 'directUser'].forEach(function (item) {
        var element = jQuery('#' + item);
        result[item] = element.val();
        element.val('').trigger('change');
    });
    result.filterName = jQuery('#nameFilteredItem').val();
    results.push(result);
    sessionStorage.setItem('resultList', JSON.stringify(results));
    console.log('results',results,result);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function setEnvironmentalArray(data) {
    environmentalColumnArray.push('FESID2244');
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
    environmentalArray.sort(function (a, b) {
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
    sessionStorage.setItem('environmentalArray', JSON.stringify(environmentalArray));
}

function setEcologicalArray(data) {
    ecologicalColumnArray.push('FESID2244');
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
    ecologicalArray.sort(function (a, b) {
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
    sessionStorage.setItem('ecologicalArray', JSON.stringify(ecologicalArray));
}


function setDirectUseArray(data) {
    directUseColumnArray.push('FESID2244');
    var tempArray = getDefinedColumns(data, directUseColumnArray),
        directUseArray = [];
    tempArray.forEach(function (item, index) {
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
    directUseArray.sort(function (a, b) {
        var ecoClassA = a.directUseClass.toUpperCase(),
            ecoClassB = b.directUseClass.toUpperCase(),
            ecoSubIClassA = a.directUseSubClassI.toUpperCase(),
            ecoSubIClassB = b.directUseSubClassI.toUpperCase(),
            ecoSubIIClassA = a.directUseSubClassII.toUpperCase(),
            ecoSubIIClassB = b.directUseSubClassII.toUpperCase();
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
    sessionStorage.setItem('directUseArray', JSON.stringify(directUseArray));
}

function setDirectUserArray(data) {
    directUserColumnArray.push('FESID2244');
    console.log('directUserColumnArray', directUserColumnArray);
    var tempArray = getDefinedColumns(data, directUserColumnArray),
        directUserArray = [];
    tempArray.forEach(function (item, index) {
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
    directUserArray.sort(function (a, b) {
        var ecoClassA = a.directUserClass.toUpperCase(),
            ecoClassB = b.directUserClass.toUpperCase(),
            ecoSubIClassA = a.directUserSubClassI.toUpperCase(),
            ecoSubIClassB = b.directUserSubClassI.toUpperCase(),
            ecoSubIIClassA = a.directUserSubClassII.toUpperCase(),
            ecoSubIIClassB = b.directUserSubClassII.toUpperCase();
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
    sessionStorage.setItem('directUserArray', JSON.stringify(directUserArray));
}


function getDefinedColumns(data, displayColumns) {
    var columns = [], results = [];
    displayColumns.forEach(function (item) {
        var index = data[0].indexOf(item);
        columns.push(index);
    });
    data.forEach(function (item) {
        var row = [];
        columns.forEach(function (index) {
            row.push(item[index]);
        });
        results.push(row);
    });

    return results;
}

function setUpSelect2(element, data) {

    var results = [],
        self = this,
        keys = Object.keys(data[0]),
        keys = keys.splice(1, keys.length);

    data.forEach(function (item) {
        var values = [];
        keys.forEach(function (propertyName) {
            values.push(item[propertyName]);
        });
        results.push({
            "id": item.id,
            "text": values.join(' - ')
        });
    });
    jQuery("#" + element).select2({
        dropdownAutoWidth: true,
        placeholder: "Select",
        minimumInputLength: 0,
        allowClear: true,
        multiple: false,
        data: results
    }).on('select2:select select2:unselect', toggleAdd);
}

function toggleAdd(event) {
    console.log('toggleAdd  event:', event);
}