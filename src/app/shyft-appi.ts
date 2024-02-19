import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, of } from 'rxjs';

@Injectable ({providedIn: 'root'})
export class ShyftApiService {
private readonly _httpClient : HttpClient = inject(HttpClient);
private readonly _headers = {'x-api-key': 'BJ7bj0qqP0YDrAKT'};
private readonly _mint = '7vSoQ1nTZgL8WDxaVbYandXSFvUxwGrXAQGgjVfEra46';

getAccount(publicKey: string | undefined| null) {
    if (!publicKey){
        return of(null);
    }

    const url = new URL('https://api.shyft.to/sol/v1/wallet/token_balance');

    url.searchParams.append('network','mainnet-beta');
    url.searchParams.append('wallet', publicKey);
    url.searchParams.append('token', this._mint);

    return this._httpClient
    .get<{ result: {balance: number; info: {image: string} }}>(
        url.toString(),
         { headers: this._headers }
         )
        .pipe(map(({result}) => result));
}

}