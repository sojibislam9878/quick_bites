import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  try {
    const body = await request.json();

    const paymentData = {
      store_id: process.env.PAYMENT_ID,
      store_passwd: process.env.PAYMENT_PASSWORD,
      total_amount: body.amount || '1000',
      currency: 'BDT',
      tran_id: body.tran_id || 'REF123',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment-success`,
      fail_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment-fail`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment-cancel`,
      ipn_url: `${process.env.NEXT_PUBLIC_SITE_URL}/ipn`,
      shipping_method: 'NO',
      product_name: 'Test Product',
      product_category: 'Test Category',
      product_profile: 'general',
      cus_name: body.cus_name || 'Customer Name',
      cus_email: body.cus_email || 'customer@example.com',
      cus_add1: 'Dhaka',
      cus_city: 'Dhaka',
      cus_postcode: '1000',
      cus_country: 'Bangladesh',
      cus_phone: body.cus_phone || '01234567890',
    };

    // Make the POST request to SSLCommerz API
    const response = await axios.post('https://sandbox.sslcommerz.com/gwprocess/v4/api.php', {
      store_id: 'zephy66edc01f83108',
      store_passwd: process.env.PAYMENT_PASSWORD,
      total_amount: body.amount || '1000',
      currency: 'BDT',
      tran_id: body.tran_id || 'REF123',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment-success`,
      fail_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment-fail`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment-cancel`,
      ipn_url: `${process.env.NEXT_PUBLIC_SITE_URL}/ipn`,
      shipping_method: 'NO',
      product_name: 'Test Product',
      product_category: 'Test Category',
      product_profile: 'general',
      store_id: 'zephy66edc01f83108',

      cus_name: body.cus_name || 'Customer Name',
      cus_email: body.cus_email || 'customer@example.com',
      cus_add1: 'Dhaka',
      cus_city: 'Dhaka',
      cus_postcode: '1000',
      cus_country: 'Bangladesh',
      cus_phone: body.cus_phone || '01234567890',
    });

    const paymentResponse = response.data;
    console.log(paymentResponse)

    if (paymentResponse.GatewayPageURL) {
      return NextResponse.json({ url: paymentResponse.GatewayPageURL }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Failed to initiate payment' }, { status: 400 });
    }
  } catch (error) {
    console.error('Payment initialization failed:', error);
    return NextResponse.json({ error: 'Payment initialization failed', message: error.message }, { status: 500 });
  }
}
