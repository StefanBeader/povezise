<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'instagram_handle' => 'required|string',
            'contact_method' => 'required',
            'contact_value' => 'required|string',
            'package_id' => 'required|int',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'Ovo polje je obavezno',
            'instagram_handle.required'  => 'Ovo polje je obavezno',
            'contact_method.required'  => 'Ovo polje je obavezno',
            'contact_value.required'  => 'Ovo polje je obavezno',
            'package_id.required'  => 'Ovo polje je obavezno',
            'package_id.int'  => 'Ovo polje mora biti broj',
        ];
    }
}
