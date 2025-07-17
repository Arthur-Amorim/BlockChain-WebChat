// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Messenger {
    struct Message {
        address from;
        address to;
        string content;
        uint256 timestamp;
    }

    Message[] public messages;

    event MessageSent(address indexed from, address indexed to, string content, uint256 timestamp);

    function sendMessage(address _to, string calldata _content) external {
        Message memory newMessage = Message({
            from: msg.sender,
            to: _to,
            content: _content,
            timestamp: block.timestamp
        });

        messages.push(newMessage);
        emit MessageSent(msg.sender, _to, _content, block.timestamp);
    }

    function getAllMessages() external view returns (Message[] memory) {
        return messages;
    }
}
