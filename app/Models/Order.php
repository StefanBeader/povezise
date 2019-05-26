<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'name',
        'instagram_handle',
        'contact_method',
        'contact_value',
        'package_id'
    ];

    public function package()
    {
        return $this->belongsTo(Package::class);
    }
}
