import { useEffect, useState } from "react";
import { MainContract } from "../contracts/MainContract";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { Address, OpenedContract } from "ton-core";

export function useMainContract() {
    const client = useTonClient();
    const [contractData, setContractData] = useState<null | {
        counter_value: number;
        recent_sender: Address;
        owner_address: Address;
    }
    
    const mainContract = useAsyncInitialize(async () => {
        if (!client) return;
        const contract = new MainContract(
            Address.parse("EQCS7PUYXVFI-4uvP1_vZsMVqLDmzwuimhEPtsyQKIcdeNPu")
        );
        return client.open(contract) as OpenedContract<MainContract>;
    }, [client]);
}