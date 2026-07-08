<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;
use Symfony\Component\HttpFoundation\Response;

class CheckToken
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // $token = $request->input('token');
        $token = PersonalAccessToken::findToken($request->bearerToken());

        if(!$token) { 
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized'
            ],401);
        }

        return $next($request);
    }
}
