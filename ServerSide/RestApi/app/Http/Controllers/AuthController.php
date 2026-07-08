<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function Register(Request $req) {
        $validator = Validator::make($req->all(),[
            'username' => 'required|string',
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid field',
                'errors' => $validator->errors()
            ],442);
        }

        $is_exist = User::where('email','=',$req->email)->first();

        if($is_exist) {
            return response()->json([
                'status' => 'error',
                'message' => 'email already exist'
            ],422);
        }

        $user = User::create([
            'name' => $req->username,
            'email' => $req->email,
            'password' => Hash::make($req->password)
        ]);

        $user->save();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'Daftar akun berhasil',
            'data' => [
                'id' => $user->id,
                'name' => $user->name,
                'email'=> $user->email,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at
            ],
            'token' => $token
        ],201);
    }

    public function Login(Request $req) {
        $validator = Validator::make($req->all(),[
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid field',
                'errors' => $validator->errors()
            ],442);
        }

        $user = User::where('email','=',$req->email)->first();

        if(!$user || !Hash::check($req->password, $user->password)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid credentials'
            ],401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        Auth::login($user);

        return response()->json([
            'status' => 'success',
            'message' => 'Login berhasil',
            'data' => [
                'id' => $user->id,
                'name' => $user->name,
                'email'=> $user->email,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at
            ],
            'token' => $token
        ],200);
    }
}
