module.exports =  class Sequin {

  constructor( items ) {
    this.items = items;
    this.reset();
    this.totalItems = this.items.length;
  }

  // ------------------------------------ API

  // Go to the next item
  next( loopOnOverShoot=false ) { this.incramentItemIndex(1,  loopOnOverShoot); }
  prev( loopOnOverShoot=false ) { this.incramentItemIndex(-1, loopOnOverShoot); }

  isAtLastItem(){
    if (this.currentItemIndex === (this.totalItems-1))
      return true;
    return false;
  }

  get currentItem() { return this.items[ this.currentItemIndex ]; }

  incramentItemIndex( incrament, loopOnOverShoot) {
    if (loopOnOverShoot == null) { loopOnOverShoot = false; }
    let newIndex = this.currentItemIndex + incrament;

    // Make sure the new index falls within the range of items
    if (newIndex > (this.totalItems - 1))
      newIndex = loopOnOverShoot ? 0 : this.totalItems - 1;    // if new index is greater than the last item, show last item.
    else if (newIndex < 0)
      newIndex = loopOnOverShoot ?  this.totalItems - 1 : 0;  // if the index is less than 0, show first item.

    // Make sure new item is different than old item, return
    if (this.currentItemIndex !== newIndex) {
      this.currentItemIndex = newIndex;
      return true;
    }
    return false;
  }

  changeItemByIndex( newIndex ) {
    const plusOrMinus          = newIndex > this.currentItemIndex ? 1 : -1;
    const incramentDifference  = Math.abs( this.currentItemIndex - newIndex ) * plusOrMinus;
    this.incramentItemIndex( incramentDifference );
  }

  activateItemByParam(param, val) {
    this.currentItemIndex = this.getIndexByParam(param, val);
  }

  getIndexByParam(param, val) {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item[param] === val) {
        return i;
      }
    }
    return null;
  }

  getItemByParam(param, val) {
    // Add in some checking to make sure it works
    return this.items[ this.getIndexByParam(param, val) ];
  }

  reset() { this.currentItemIndex = 0; }


  addItem(item, index) {
    if ((index == null)) {
      index = this.items.length;
    } else {
      index;
    }
    this.items.splice(index, 0, item);
    this.totalItems++;
  }

  removeItembyParam(param, val) {
    this.removeItemByIndex(this.getIndexByParam(param, val));
  }

  removeItemByIndex(index){
    if ((index == null)) { return; }
    this.items.splice(index, 1);
    this.totalItems--;
  }
}
