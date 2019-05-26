<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Jobs\SendOrderMail;
use App\Models\Order;

class OrderController extends Controller
{
    public function store(StoreOrderRequest $request, Order $order)
    {
        try {
            $data = $order->create($request->all());
            SendOrderMail::dispatch($data);
            $status = 200;
        } catch (\Exception $e) {
            $status = 500;
            info($e->getMessage());
        }

        return response()->json([], $status);
    }
}
