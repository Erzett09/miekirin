<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public function user() {
        return $this->belongsToMany(User::class,'user_id');
    }

    public function orders_detail() {
        return $this->hasMany(OrderDetails::class);
    }
}
