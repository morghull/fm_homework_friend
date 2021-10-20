'use strict';

class Friend {
  constructor(name, candiesCount, friends) {
    this.name = name;
    this.candiesCount = candiesCount;
    this.friends = friends;
  }
  gimmeCandies() {
    let contributedCandies = this.candiesCount;
    for (const friend of this.friends) {
      contributedCandies += friend.gimmeCandies();
    }
    this.candiesCount = 0;
    return contributedCandies;
  }
}
