'use server'
import {advertisements} from '../data/advertisements.json';

import {NextResponse} from "next/server";

export async function GET(req: Request) {
    return NextResponse.json(advertisements);

}