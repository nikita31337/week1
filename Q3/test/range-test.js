const { ethers } = require("hardhat");
const fs = require("fs");
const { groth16 } = require("snarkjs");



describe("RangeProof", function () {
    let Verifier;
    let verifier;

    beforeEach(async function () {
        Verifier = await ethers.getContractFactory("RangeProofVerifier");
        verifier = await Verifier.deploy();
        await verifier.deployed();
    });

    it("Should return true for correct proof", async function () {
        //[assignment] Add comments to explain what each line is doing
        const { proof, publicSignals } = await groth16.fullProve({
            "in": "11",
            "range": ["10", "12"]
        },
        "contracts/circuits/RangeProof/RangeProof_js/RangeProof.wasm","contracts/circuits/RangeProof/circuit_final.zkey");
        
        console.log(publicSignals);

    });

    it("Should return true for correct proof", async function () {
        //[assignment] Add comments to explain what each line is doing
        const { proof, publicSignals } = await groth16.fullProve({
            "in": "13",
            "range": ["10", "12"]
        },
        "contracts/circuits/RangeProof/RangeProof_js/RangeProof.wasm","contracts/circuits/RangeProof/circuit_final.zkey");
        
        console.log(publicSignals);

    });

    it("Should return true for correct proof", async function () {
        //[assignment] Add comments to explain what each line is doing
        const { proof, publicSignals } = await groth16.fullProve({
            "in": "9",
            "range": ["10", "12"]
        },
        "contracts/circuits/RangeProof/RangeProof_js/RangeProof.wasm","contracts/circuits/RangeProof/circuit_final.zkey");
        
        console.log(publicSignals);

    });


});