import { atom } from 'recoil';

interface userType {
    [key: string]: list[];
  }

export interface EventList extends userType {
    helmet:list[];
    connect:list[];
    smog:list[];
    heartbeat:list[];
    fire:list[];
}

export interface list  {
    location:string | null;
    message:string | null;
    cctv:string | null;
    acq_time:string | null;
    sort:string;
}

export const recoilDashboardGIS = atom<EventList>({
	key: 'dashboardGIS',
	default: {
        helmet:[],
        connect:[],
        smog:[],
        heartbeat:[],
        fire:[]
    },
});
