export default async function CustomerPage({ params }) {
    const API_BASE = process.env.NEXT_PUBLIC_API_URL;
  
    // 从 API 获取特定客户的数据
    const data = await fetch(`${API_BASE}/customer/${params.id}`, { cache: "no-store" });
    const customer = await data.json();
    console.log({ customer });
  
    // 返回页面内容，渲染客户详细信息
    return (
      <div className="m-4">
        <h1>Customer</h1>
        <p className="font-bold text-xl text-blue-800">{customer.name}</p>
        <p>Date of Birth: {new Date(customer.dateOfBirth).toLocaleDateString()}</p>
        <p>Member Number: {customer.memberNumber}</p>
        <p>Interests: {customer.interest}</p>
      </div>
    );
  }