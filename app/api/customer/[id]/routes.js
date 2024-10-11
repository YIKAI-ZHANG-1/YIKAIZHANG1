import connectDB from '@/lib/mongodb';
import Customer from "@/models/Customer";
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    await connectDB(); // 确保数据库已连接
    const id = params.id;
    const customer = await Customer.findById(id);
    if (!customer) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
    }
    return NextResponse.json(customer);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch customer' }, { status: 500 });
  }
}
