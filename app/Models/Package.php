<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $fillable = [
        'name',
        'price'
    ];

    public static function getPromoPackageId()
    {
        return static::where('name', 'promo')->first()->id;
    }

    public static function isPromoPackage($id)
    {
        return static::getPromoPackageId() === $id;
    }
}
