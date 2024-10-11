import Customer from "@/models/Customer";
import { NextResponse } from 'next/server';

// GET /api/customer/[id] - 获取特定客户信息
export async function GET(request, { params }) {
  try {
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

// DELETE /api/customer/[id] - 删除特定客户
export async function DELETE(request, { params }) {
  try {
    const id = params.id;
    const deletedCustomer = await Customer.findByIdAndDelete(id);
    if (!deletedCustomer) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Customer deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete customer' }, { status: 500 });
  }
}