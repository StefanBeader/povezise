<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactMessageRequest;
use App\Jobs\SendContactMail;
use App\Models\ContactMessage;

class ContactMessageController extends Controller
{
    public function store(StoreContactMessageRequest $request, ContactMessage $message)
    {
        try {
            $data = $message->create($request->all());
            SendContactMail::dispatch($data);
            $status = 200;
        } catch (\Exception $e) {
            $status = 500;
            info($e->getMessage());
        }

        return response()->json([], $status);
    }
}
