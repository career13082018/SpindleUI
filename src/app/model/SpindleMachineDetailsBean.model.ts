import { SpindleMasterDetailsBean } from "./SpindleMasterDetailsBean.model";

export class SpindleMachineDetailsBean {

    machineId: string;
    clientUUID: string;
    machineUUID: string;
    machineAddress: string;
    deviceUUID: string;
    spindleMasterTimestamp: string;
    spindleMaster: string;
    spindleMasterDetailsSet: SpindleMasterDetailsBean;
  }