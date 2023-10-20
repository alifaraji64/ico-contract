// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
contract TestToken is ERC20,Pausable {
    constructor(string memory name, string memory symbol) ERC20 (name, symbol) {}
}
