import Customer from "@/models/Customer";
import { NextResponse } from 'next/server';

import Customer from "@/models/Customer";
import { NextResponse } from 'next/server';

// GET /api/customer/[id] - 获取特定客户信息
export async function GET(request, { params }) {
  try {
    console.log("Params ID:", params.id); // 打印 ID 以调试
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
        console.log("Params ID:", params.id); // 打印 ID 以调试
        const id = params.id;
      const deletedCustomer = await Customer.findByIdAndDelete(params.id);
      if (!deletedCustomer) {
        return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
      }
      return NextResponse.json({ message: 'Customer deleted successfully' });
    } catch (error) {
      return NextResponse.json({ error: 'Failed to delete customer' }, { status: 500 });
    }
  }
// POST /api/customer - 添加新客户
export async function POST(request) {
  try {
    console.log("Params ID:", params.id); // 打印 ID 以调试
    const id = params.id;
    const body = await request.json();
    const customer = new Customer(body);
    await customer.save();
    return NextResponse.json(customer, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create customer' }, { status: 500 });
  }
}

// PUT /api/customer/[id] - 更新特定客户信息
export async function PUT(request) {
  try {
    console.log("Params ID:", params.id); // 打印 ID 以调试
    const id = params.id;
    const body = await request.json();
    const customer = await Customer.findByIdAndUpdate(body._id, body, { new: true });
    if (!customer) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
    }
    return NextResponse.json(customer);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update customer' }, { status: 500 });
  }
}

