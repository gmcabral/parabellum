export function mapTokenDtoToToken(dto) {
    return {
        accessToken: dto.access_token,
        refreshToken: dto.refresh_token,
        tokenType: dto.token_type,
        issuedAt: new Date(dto['.issued']).getTime(),
        expiresAt: new Date(dto['.expires']).getTime(),
        refreshExpiresAt: new Date(dto['.refreshexpires']).getTime(),
        expiresIn: dto.expires_in
    };
}