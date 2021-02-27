lastItemIndex = 1;

function AddItem() {
    lastItemIndex++;
    let itemHTML = `
<div class="row g-3">
    <div class="col-sm-3">
        <label for="price" class="form-label">Price</label>
        <input type="text" class="form-control" id="price${lastItemIndex}" placeholder="" value="" required>
    </div>
    <div class="col-sm-3">
        <label for="quantity" class="form-label">Quantity</label>
        <input type="text" class="form-control" id="quantity${lastItemIndex}" placeholder="" value="" required>
    </div>
    <div class="col-sm-4">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name${lastItemIndex}" placeholder="" value="" required>
    </div>
    <div class="col-sm-2" style="margin-top: auto">
        <button class="btn btn-primary btn-sm" onclick="removeItem(${lastItemIndex})">Remove</button>
    </div>
</div>
    `;
    document.getElementById('itemContainer').insertAdjacentHTML('beforeend', itemHTML);
}