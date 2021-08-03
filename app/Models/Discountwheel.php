<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discountwheel extends Model
{
    use HasFactory;
    protected $fillable = [
        'price_rule_id',
        'code'
    ];
}
