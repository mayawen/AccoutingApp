lastItemIndex = 1;

function AddItem() {
    lastItemIndex++;
    let itemHTML = `
<div class="row g-3"  id="item${lastItemIndex}">
    <div class="col-sm-4">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name${lastItemIndex}" placeholder="" value="" required>
    </div>
    <div class="col-sm-3">
        <label for="price" class="form-label">Price</label>
        <input type="text" class="form-control" id="price${lastItemIndex}" placeholder="" value="" required>
    </div>
    <div class="col-sm-2">
        <label for="quantity" class="form-label">Quantity</label>
        <input type="text" class="form-control" id="quantity${lastItemIndex}" placeholder="" value="1" required>
    </div>
    <div class="col-sm-2">
        <label for="unit" class="form-label">Unit</label>
        <select class="form-select" id="unit${lastItemIndex}" aria-label="Default select example">
            <option selected>pc</option>
            <option value="1">One</option>
        </select>
    </div>
    <div class="col-sm-1" style="margin-top: auto">
        <button class="btn btn-danger" style="float: right" onclick="RemoveItem(${lastItemIndex})">X</button>
    </div>
</div>
    `;
    document.getElementById('itemContainer').insertAdjacentHTML('beforeend', itemHTML);
}

function RemoveItem(itemIndex) {
    console.log(itemIndex);
    document.getElementById(`item${itemIndex}`).remove();
}

$(document).ready(function(){
    $('#Items').keypress(function(e){
        //console.log(e.keyCode);
        if(e.keyCode == 13) //enter
            $('#addItemBtn').click();
    });
});