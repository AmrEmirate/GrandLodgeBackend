
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model PropertyImage
 * 
 */
export type PropertyImage = $Result.DefaultSelection<Prisma.$PropertyImagePayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model RoomImage
 * 
 */
export type RoomImage = $Result.DefaultSelection<Prisma.$RoomImagePayload>
/**
 * Model RoomAvailability
 * 
 */
export type RoomAvailability = $Result.DefaultSelection<Prisma.$RoomAvailabilityPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model BookingRoom
 * 
 */
export type BookingRoom = $Result.DefaultSelection<Prisma.$BookingRoomPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  TENANT: 'TENANT',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const RoomCategory: {
  STANDARD: 'STANDARD',
  DELUXE: 'DELUXE',
  SUITE: 'SUITE'
};

export type RoomCategory = (typeof RoomCategory)[keyof typeof RoomCategory]


export const BedOption: {
  SINGLE: 'SINGLE',
  DOUBLE: 'DOUBLE',
  TWIN: 'TWIN'
};

export type BedOption = (typeof BedOption)[keyof typeof BedOption]


export const BookingStatus: {
  MENUNGGU_PEMBAYARAN: 'MENUNGGU_PEMBAYARAN',
  MENUNGGU_KONFIRMASI: 'MENUNGGU_KONFIRMASI',
  DIPROSES: 'DIPROSES',
  DIBATALKAN: 'DIBATALKAN',
  SELESAI: 'SELESAI'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const TokenPurpose: {
  EMAIL_VERIFICATION: 'EMAIL_VERIFICATION',
  PASSWORD_RESET: 'PASSWORD_RESET'
};

export type TokenPurpose = (typeof TokenPurpose)[keyof typeof TokenPurpose]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type RoomCategory = $Enums.RoomCategory

export const RoomCategory: typeof $Enums.RoomCategory

export type BedOption = $Enums.BedOption

export const BedOption: typeof $Enums.BedOption

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type TokenPurpose = $Enums.TokenPurpose

export const TokenPurpose: typeof $Enums.TokenPurpose

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs>;

  /**
   * `prisma.propertyImage`: Exposes CRUD operations for the **PropertyImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyImages
    * const propertyImages = await prisma.propertyImage.findMany()
    * ```
    */
  get propertyImage(): Prisma.PropertyImageDelegate<ExtArgs>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs>;

  /**
   * `prisma.roomImage`: Exposes CRUD operations for the **RoomImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomImages
    * const roomImages = await prisma.roomImage.findMany()
    * ```
    */
  get roomImage(): Prisma.RoomImageDelegate<ExtArgs>;

  /**
   * `prisma.roomAvailability`: Exposes CRUD operations for the **RoomAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomAvailabilities
    * const roomAvailabilities = await prisma.roomAvailability.findMany()
    * ```
    */
  get roomAvailability(): Prisma.RoomAvailabilityDelegate<ExtArgs>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs>;

  /**
   * `prisma.bookingRoom`: Exposes CRUD operations for the **BookingRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingRooms
    * const bookingRooms = await prisma.bookingRoom.findMany()
    * ```
    */
  get bookingRoom(): Prisma.BookingRoomDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Tenant: 'Tenant',
    Category: 'Category',
    Property: 'Property',
    PropertyImage: 'PropertyImage',
    Room: 'Room',
    RoomImage: 'RoomImage',
    RoomAvailability: 'RoomAvailability',
    Booking: 'Booking',
    BookingRoom: 'BookingRoom',
    Review: 'Review',
    Token: 'Token'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "tenant" | "category" | "property" | "propertyImage" | "room" | "roomImage" | "roomAvailability" | "booking" | "bookingRoom" | "review" | "token"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      PropertyImage: {
        payload: Prisma.$PropertyImagePayload<ExtArgs>
        fields: Prisma.PropertyImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findFirst: {
            args: Prisma.PropertyImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findMany: {
            args: Prisma.PropertyImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          create: {
            args: Prisma.PropertyImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          createMany: {
            args: Prisma.PropertyImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          delete: {
            args: Prisma.PropertyImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          update: {
            args: Prisma.PropertyImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          deleteMany: {
            args: Prisma.PropertyImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          aggregate: {
            args: Prisma.PropertyImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyImage>
          }
          groupBy: {
            args: Prisma.PropertyImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyImageCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      RoomImage: {
        payload: Prisma.$RoomImagePayload<ExtArgs>
        fields: Prisma.RoomImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          findFirst: {
            args: Prisma.RoomImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          findMany: {
            args: Prisma.RoomImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>[]
          }
          create: {
            args: Prisma.RoomImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          createMany: {
            args: Prisma.RoomImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>[]
          }
          delete: {
            args: Prisma.RoomImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          update: {
            args: Prisma.RoomImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          deleteMany: {
            args: Prisma.RoomImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          aggregate: {
            args: Prisma.RoomImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomImage>
          }
          groupBy: {
            args: Prisma.RoomImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomImageCountArgs<ExtArgs>
            result: $Utils.Optional<RoomImageCountAggregateOutputType> | number
          }
        }
      }
      RoomAvailability: {
        payload: Prisma.$RoomAvailabilityPayload<ExtArgs>
        fields: Prisma.RoomAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.RoomAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>
          }
          findMany: {
            args: Prisma.RoomAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>[]
          }
          create: {
            args: Prisma.RoomAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>
          }
          createMany: {
            args: Prisma.RoomAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.RoomAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>
          }
          update: {
            args: Prisma.RoomAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.RoomAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.RoomAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomAvailability>
          }
          groupBy: {
            args: Prisma.RoomAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<RoomAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      BookingRoom: {
        payload: Prisma.$BookingRoomPayload<ExtArgs>
        fields: Prisma.BookingRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>
          }
          findFirst: {
            args: Prisma.BookingRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>
          }
          findMany: {
            args: Prisma.BookingRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>[]
          }
          create: {
            args: Prisma.BookingRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>
          }
          createMany: {
            args: Prisma.BookingRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>[]
          }
          delete: {
            args: Prisma.BookingRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>
          }
          update: {
            args: Prisma.BookingRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>
          }
          deleteMany: {
            args: Prisma.BookingRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>
          }
          aggregate: {
            args: Prisma.BookingRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingRoom>
          }
          groupBy: {
            args: Prisma.BookingRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingRoomCountArgs<ExtArgs>
            result: $Utils.Optional<BookingRoomCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookings: number
    reviews: number
    tokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    properties: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | TenantCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    properties: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | CategoryCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    images: number
    rooms: number
    bookings: number
    reviews: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | PropertyCountOutputTypeCountImagesArgs
    rooms?: boolean | PropertyCountOutputTypeCountRoomsArgs
    bookings?: boolean | PropertyCountOutputTypeCountBookingsArgs
    reviews?: boolean | PropertyCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    images: number
    availabilities: number
    bookingRooms: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | RoomCountOutputTypeCountImagesArgs
    availabilities?: boolean | RoomCountOutputTypeCountAvailabilitiesArgs
    bookingRooms?: boolean | RoomCountOutputTypeCountBookingRoomsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomImageWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomAvailabilityWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountBookingRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingRoomWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    bookingRooms: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingRooms?: boolean | BookingCountOutputTypeCountBookingRoomsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountBookingRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingRoomWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    role: $Enums.UserRole | null
    fullName: string | null
    email: string | null
    password: string | null
    profilePicture: string | null
    provider: string | null
    providerId: string | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    role: $Enums.UserRole | null
    fullName: string | null
    email: string | null
    password: string | null
    profilePicture: string | null
    provider: string | null
    providerId: string | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    role: number
    fullName: number
    email: number
    password: number
    profilePicture: number
    provider: number
    providerId: number
    verified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    role?: true
    fullName?: true
    email?: true
    password?: true
    profilePicture?: true
    provider?: true
    providerId?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    role?: true
    fullName?: true
    email?: true
    password?: true
    profilePicture?: true
    provider?: true
    providerId?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    role?: true
    fullName?: true
    email?: true
    password?: true
    profilePicture?: true
    provider?: true
    providerId?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    role: $Enums.UserRole
    fullName: string
    email: string
    password: string | null
    profilePicture: string | null
    provider: string | null
    providerId: string | null
    verified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    profilePicture?: boolean
    provider?: boolean
    providerId?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | User$tenantArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    profilePicture?: boolean
    provider?: boolean
    providerId?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    role?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    profilePicture?: boolean
    provider?: boolean
    providerId?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | User$tenantArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs> | null
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      tokens: Prisma.$TokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: $Enums.UserRole
      fullName: string
      email: string
      password: string | null
      profilePicture: string | null
      provider: string | null
      providerId: string | null
      verified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends User$tenantArgs<ExtArgs> = {}>(args?: Subset<T, User$tenantArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'String'>
    readonly providerId: FieldRef<"User", 'String'>
    readonly verified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.tenant
   */
  export type User$tenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TenantSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TenantMinAggregateOutputType = {
    id: number | null
    userId: number | null
    companyName: string | null
    addressCompany: string | null
    phoneNumberCompany: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    companyName: string | null
    addressCompany: string | null
    phoneNumberCompany: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    addressCompany: number
    phoneNumberCompany: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TenantSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TenantMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    addressCompany?: true
    phoneNumberCompany?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    addressCompany?: true
    phoneNumberCompany?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    addressCompany?: true
    phoneNumberCompany?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _avg?: TenantAvgAggregateInputType
    _sum?: TenantSumAggregateInputType
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: number
    userId: number
    companyName: string
    addressCompany: string
    phoneNumberCompany: string
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    addressCompany?: boolean
    phoneNumberCompany?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    properties?: boolean | Tenant$propertiesArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    addressCompany?: boolean
    phoneNumberCompany?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    addressCompany?: boolean
    phoneNumberCompany?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    properties?: boolean | Tenant$propertiesArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      properties: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      companyName: string
      addressCompany: string
      phoneNumberCompany: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    properties<T extends Tenant$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */ 
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'Int'>
    readonly userId: FieldRef<"Tenant", 'Int'>
    readonly companyName: FieldRef<"Tenant", 'String'>
    readonly addressCompany: FieldRef<"Tenant", 'String'>
    readonly phoneNumberCompany: FieldRef<"Tenant", 'String'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant.properties
   */
  export type Tenant$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    properties?: boolean | Category$propertiesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | Category$propertiesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends Category$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Category$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.properties
   */
  export type Category$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    id: number | null
    tenantId: number | null
    categoryId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type PropertySumAggregateOutputType = {
    id: number | null
    tenantId: number | null
    categoryId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: number | null
    tenantId: number | null
    name: string | null
    categoryId: number | null
    description: string | null
    location: string | null
    latitude: number | null
    longitude: number | null
    provinsi: string | null
    zipCode: string | null
    mainImage: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: number | null
    tenantId: number | null
    name: string | null
    categoryId: number | null
    description: string | null
    location: string | null
    latitude: number | null
    longitude: number | null
    provinsi: string | null
    zipCode: string | null
    mainImage: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    tenantId: number
    name: number
    categoryId: number
    description: number
    location: number
    latitude: number
    longitude: number
    provinsi: number
    zipCode: number
    mainImage: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    id?: true
    tenantId?: true
    categoryId?: true
    latitude?: true
    longitude?: true
  }

  export type PropertySumAggregateInputType = {
    id?: true
    tenantId?: true
    categoryId?: true
    latitude?: true
    longitude?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    categoryId?: true
    description?: true
    location?: true
    latitude?: true
    longitude?: true
    provinsi?: true
    zipCode?: true
    mainImage?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    categoryId?: true
    description?: true
    location?: true
    latitude?: true
    longitude?: true
    provinsi?: true
    zipCode?: true
    mainImage?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    categoryId?: true
    description?: true
    location?: true
    latitude?: true
    longitude?: true
    provinsi?: true
    zipCode?: true
    mainImage?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: number
    tenantId: number
    name: string
    categoryId: number
    description: string
    location: string
    latitude: number | null
    longitude: number | null
    provinsi: string
    zipCode: string
    mainImage: string | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    categoryId?: boolean
    description?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    provinsi?: boolean
    zipCode?: boolean
    mainImage?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    images?: boolean | Property$imagesArgs<ExtArgs>
    rooms?: boolean | Property$roomsArgs<ExtArgs>
    bookings?: boolean | Property$bookingsArgs<ExtArgs>
    reviews?: boolean | Property$reviewsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    categoryId?: boolean
    description?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    provinsi?: boolean
    zipCode?: boolean
    mainImage?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    tenantId?: boolean
    name?: boolean
    categoryId?: boolean
    description?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    provinsi?: boolean
    zipCode?: boolean
    mainImage?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    images?: boolean | Property$imagesArgs<ExtArgs>
    rooms?: boolean | Property$roomsArgs<ExtArgs>
    bookings?: boolean | Property$bookingsArgs<ExtArgs>
    reviews?: boolean | Property$reviewsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      images: Prisma.$PropertyImagePayload<ExtArgs>[]
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tenantId: number
      name: string
      categoryId: number
      description: string
      location: string
      latitude: number | null
      longitude: number | null
      provinsi: string
      zipCode: string
      mainImage: string | null
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    images<T extends Property$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Property$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany"> | Null>
    rooms<T extends Property$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Property$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany"> | Null>
    bookings<T extends Property$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Property$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends Property$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Property$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property model
   */ 
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'Int'>
    readonly tenantId: FieldRef<"Property", 'Int'>
    readonly name: FieldRef<"Property", 'String'>
    readonly categoryId: FieldRef<"Property", 'Int'>
    readonly description: FieldRef<"Property", 'String'>
    readonly location: FieldRef<"Property", 'String'>
    readonly latitude: FieldRef<"Property", 'Float'>
    readonly longitude: FieldRef<"Property", 'Float'>
    readonly provinsi: FieldRef<"Property", 'String'>
    readonly zipCode: FieldRef<"Property", 'String'>
    readonly mainImage: FieldRef<"Property", 'String'>
    readonly deletedAt: FieldRef<"Property", 'DateTime'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
  }

  /**
   * Property.images
   */
  export type Property$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    cursor?: PropertyImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * Property.rooms
   */
  export type Property$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Property.bookings
   */
  export type Property$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Property.reviews
   */
  export type Property$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model PropertyImage
   */

  export type AggregatePropertyImage = {
    _count: PropertyImageCountAggregateOutputType | null
    _avg: PropertyImageAvgAggregateOutputType | null
    _sum: PropertyImageSumAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  export type PropertyImageAvgAggregateOutputType = {
    id: number | null
    propertyId: number | null
  }

  export type PropertyImageSumAggregateOutputType = {
    id: number | null
    propertyId: number | null
  }

  export type PropertyImageMinAggregateOutputType = {
    id: number | null
    propertyId: number | null
    imageUrl: string | null
  }

  export type PropertyImageMaxAggregateOutputType = {
    id: number | null
    propertyId: number | null
    imageUrl: string | null
  }

  export type PropertyImageCountAggregateOutputType = {
    id: number
    propertyId: number
    imageUrl: number
    _all: number
  }


  export type PropertyImageAvgAggregateInputType = {
    id?: true
    propertyId?: true
  }

  export type PropertyImageSumAggregateInputType = {
    id?: true
    propertyId?: true
  }

  export type PropertyImageMinAggregateInputType = {
    id?: true
    propertyId?: true
    imageUrl?: true
  }

  export type PropertyImageMaxAggregateInputType = {
    id?: true
    propertyId?: true
    imageUrl?: true
  }

  export type PropertyImageCountAggregateInputType = {
    id?: true
    propertyId?: true
    imageUrl?: true
    _all?: true
  }

  export type PropertyImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImage to aggregate.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyImages
    **/
    _count?: true | PropertyImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyImageMaxAggregateInputType
  }

  export type GetPropertyImageAggregateType<T extends PropertyImageAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyImage[P]>
      : GetScalarType<T[P], AggregatePropertyImage[P]>
  }




  export type PropertyImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithAggregationInput | PropertyImageOrderByWithAggregationInput[]
    by: PropertyImageScalarFieldEnum[] | PropertyImageScalarFieldEnum
    having?: PropertyImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyImageCountAggregateInputType | true
    _avg?: PropertyImageAvgAggregateInputType
    _sum?: PropertyImageSumAggregateInputType
    _min?: PropertyImageMinAggregateInputType
    _max?: PropertyImageMaxAggregateInputType
  }

  export type PropertyImageGroupByOutputType = {
    id: number
    propertyId: number
    imageUrl: string
    _count: PropertyImageCountAggregateOutputType | null
    _avg: PropertyImageAvgAggregateOutputType | null
    _sum: PropertyImageSumAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  type GetPropertyImageGroupByPayload<T extends PropertyImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
        }
      >
    >


  export type PropertyImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    imageUrl?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    imageUrl?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectScalar = {
    id?: boolean
    propertyId?: boolean
    imageUrl?: boolean
  }

  export type PropertyImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertyImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyImage"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      propertyId: number
      imageUrl: string
    }, ExtArgs["result"]["propertyImage"]>
    composites: {}
  }

  type PropertyImageGetPayload<S extends boolean | null | undefined | PropertyImageDefaultArgs> = $Result.GetResult<Prisma.$PropertyImagePayload, S>

  type PropertyImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertyImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PropertyImageCountAggregateInputType | true
    }

  export interface PropertyImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyImage'], meta: { name: 'PropertyImage' } }
    /**
     * Find zero or one PropertyImage that matches the filter.
     * @param {PropertyImageFindUniqueArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyImageFindUniqueArgs>(args: SelectSubset<T, PropertyImageFindUniqueArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PropertyImage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PropertyImageFindUniqueOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyImageFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PropertyImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyImageFindFirstArgs>(args?: SelectSubset<T, PropertyImageFindFirstArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PropertyImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyImageFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PropertyImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany()
     * 
     * // Get first 10 PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyImageFindManyArgs>(args?: SelectSubset<T, PropertyImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PropertyImage.
     * @param {PropertyImageCreateArgs} args - Arguments to create a PropertyImage.
     * @example
     * // Create one PropertyImage
     * const PropertyImage = await prisma.propertyImage.create({
     *   data: {
     *     // ... data to create a PropertyImage
     *   }
     * })
     * 
     */
    create<T extends PropertyImageCreateArgs>(args: SelectSubset<T, PropertyImageCreateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PropertyImages.
     * @param {PropertyImageCreateManyArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImage = await prisma.propertyImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyImageCreateManyArgs>(args?: SelectSubset<T, PropertyImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyImages and returns the data saved in the database.
     * @param {PropertyImageCreateManyAndReturnArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImage = await prisma.propertyImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyImages and only return the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyImageCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PropertyImage.
     * @param {PropertyImageDeleteArgs} args - Arguments to delete one PropertyImage.
     * @example
     * // Delete one PropertyImage
     * const PropertyImage = await prisma.propertyImage.delete({
     *   where: {
     *     // ... filter to delete one PropertyImage
     *   }
     * })
     * 
     */
    delete<T extends PropertyImageDeleteArgs>(args: SelectSubset<T, PropertyImageDeleteArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PropertyImage.
     * @param {PropertyImageUpdateArgs} args - Arguments to update one PropertyImage.
     * @example
     * // Update one PropertyImage
     * const propertyImage = await prisma.propertyImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyImageUpdateArgs>(args: SelectSubset<T, PropertyImageUpdateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PropertyImages.
     * @param {PropertyImageDeleteManyArgs} args - Arguments to filter PropertyImages to delete.
     * @example
     * // Delete a few PropertyImages
     * const { count } = await prisma.propertyImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyImageDeleteManyArgs>(args?: SelectSubset<T, PropertyImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyImages
     * const propertyImage = await prisma.propertyImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyImageUpdateManyArgs>(args: SelectSubset<T, PropertyImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyImage.
     * @param {PropertyImageUpsertArgs} args - Arguments to update or create a PropertyImage.
     * @example
     * // Update or create a PropertyImage
     * const propertyImage = await prisma.propertyImage.upsert({
     *   create: {
     *     // ... data to create a PropertyImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyImage we want to update
     *   }
     * })
     */
    upsert<T extends PropertyImageUpsertArgs>(args: SelectSubset<T, PropertyImageUpsertArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageCountArgs} args - Arguments to filter PropertyImages to count.
     * @example
     * // Count the number of PropertyImages
     * const count = await prisma.propertyImage.count({
     *   where: {
     *     // ... the filter for the PropertyImages we want to count
     *   }
     * })
    **/
    count<T extends PropertyImageCountArgs>(
      args?: Subset<T, PropertyImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyImageAggregateArgs>(args: Subset<T, PropertyImageAggregateArgs>): Prisma.PrismaPromise<GetPropertyImageAggregateType<T>>

    /**
     * Group by PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyImageGroupByArgs['orderBy'] }
        : { orderBy?: PropertyImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyImage model
   */
  readonly fields: PropertyImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertyImage model
   */ 
  interface PropertyImageFieldRefs {
    readonly id: FieldRef<"PropertyImage", 'Int'>
    readonly propertyId: FieldRef<"PropertyImage", 'Int'>
    readonly imageUrl: FieldRef<"PropertyImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PropertyImage findUnique
   */
  export type PropertyImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findUniqueOrThrow
   */
  export type PropertyImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findFirst
   */
  export type PropertyImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findFirstOrThrow
   */
  export type PropertyImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findMany
   */
  export type PropertyImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImages to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage create
   */
  export type PropertyImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyImage.
     */
    data: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
  }

  /**
   * PropertyImage createMany
   */
  export type PropertyImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImageCreateManyInput | PropertyImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyImage createManyAndReturn
   */
  export type PropertyImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImageCreateManyInput | PropertyImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyImage update
   */
  export type PropertyImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyImage.
     */
    data: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
    /**
     * Choose, which PropertyImage to update.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage updateMany
   */
  export type PropertyImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyImages.
     */
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyInput>
    /**
     * Filter which PropertyImages to update
     */
    where?: PropertyImageWhereInput
  }

  /**
   * PropertyImage upsert
   */
  export type PropertyImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyImage to update in case it exists.
     */
    where: PropertyImageWhereUniqueInput
    /**
     * In case the PropertyImage found by the `where` argument doesn't exist, create a new PropertyImage with this data.
     */
    create: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
    /**
     * In case the PropertyImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
  }

  /**
   * PropertyImage delete
   */
  export type PropertyImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter which PropertyImage to delete.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage deleteMany
   */
  export type PropertyImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImages to delete
     */
    where?: PropertyImageWhereInput
  }

  /**
   * PropertyImage without action
   */
  export type PropertyImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
    propertyId: number | null
    capacity: number | null
    basePrice: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
    propertyId: number | null
    capacity: number | null
    basePrice: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    propertyId: number | null
    name: string | null
    category: $Enums.RoomCategory | null
    description: string | null
    bedOption: $Enums.BedOption | null
    imageRoom: string | null
    capacity: number | null
    basePrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    propertyId: number | null
    name: string | null
    category: $Enums.RoomCategory | null
    description: string | null
    bedOption: $Enums.BedOption | null
    imageRoom: string | null
    capacity: number | null
    basePrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    propertyId: number
    name: number
    category: number
    description: number
    bedOption: number
    imageRoom: number
    capacity: number
    basePrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
    propertyId?: true
    capacity?: true
    basePrice?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
    propertyId?: true
    capacity?: true
    basePrice?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    category?: true
    description?: true
    bedOption?: true
    imageRoom?: true
    capacity?: true
    basePrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    category?: true
    description?: true
    bedOption?: true
    imageRoom?: true
    capacity?: true
    basePrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    category?: true
    description?: true
    bedOption?: true
    imageRoom?: true
    capacity?: true
    basePrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: number
    propertyId: number
    name: string
    category: $Enums.RoomCategory
    description: string
    bedOption: $Enums.BedOption
    imageRoom: string | null
    capacity: number
    basePrice: number
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    bedOption?: boolean
    imageRoom?: boolean
    capacity?: boolean
    basePrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    images?: boolean | Room$imagesArgs<ExtArgs>
    availabilities?: boolean | Room$availabilitiesArgs<ExtArgs>
    bookingRooms?: boolean | Room$bookingRoomsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    bedOption?: boolean
    imageRoom?: boolean
    capacity?: boolean
    basePrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    propertyId?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    bedOption?: boolean
    imageRoom?: boolean
    capacity?: boolean
    basePrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    images?: boolean | Room$imagesArgs<ExtArgs>
    availabilities?: boolean | Room$availabilitiesArgs<ExtArgs>
    bookingRooms?: boolean | Room$bookingRoomsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      images: Prisma.$RoomImagePayload<ExtArgs>[]
      availabilities: Prisma.$RoomAvailabilityPayload<ExtArgs>[]
      bookingRooms: Prisma.$BookingRoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      propertyId: number
      name: string
      category: $Enums.RoomCategory
      description: string
      bedOption: $Enums.BedOption
      imageRoom: string | null
      capacity: number
      basePrice: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    images<T extends Room$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Room$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findMany"> | Null>
    availabilities<T extends Room$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Room$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "findMany"> | Null>
    bookingRooms<T extends Room$bookingRoomsArgs<ExtArgs> = {}>(args?: Subset<T, Room$bookingRoomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */ 
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'Int'>
    readonly propertyId: FieldRef<"Room", 'Int'>
    readonly name: FieldRef<"Room", 'String'>
    readonly category: FieldRef<"Room", 'RoomCategory'>
    readonly description: FieldRef<"Room", 'String'>
    readonly bedOption: FieldRef<"Room", 'BedOption'>
    readonly imageRoom: FieldRef<"Room", 'String'>
    readonly capacity: FieldRef<"Room", 'Int'>
    readonly basePrice: FieldRef<"Room", 'Float'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
  }

  /**
   * Room.images
   */
  export type Room$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    where?: RoomImageWhereInput
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    cursor?: RoomImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomImageScalarFieldEnum | RoomImageScalarFieldEnum[]
  }

  /**
   * Room.availabilities
   */
  export type Room$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    where?: RoomAvailabilityWhereInput
    orderBy?: RoomAvailabilityOrderByWithRelationInput | RoomAvailabilityOrderByWithRelationInput[]
    cursor?: RoomAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomAvailabilityScalarFieldEnum | RoomAvailabilityScalarFieldEnum[]
  }

  /**
   * Room.bookingRooms
   */
  export type Room$bookingRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    where?: BookingRoomWhereInput
    orderBy?: BookingRoomOrderByWithRelationInput | BookingRoomOrderByWithRelationInput[]
    cursor?: BookingRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingRoomScalarFieldEnum | BookingRoomScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model RoomImage
   */

  export type AggregateRoomImage = {
    _count: RoomImageCountAggregateOutputType | null
    _avg: RoomImageAvgAggregateOutputType | null
    _sum: RoomImageSumAggregateOutputType | null
    _min: RoomImageMinAggregateOutputType | null
    _max: RoomImageMaxAggregateOutputType | null
  }

  export type RoomImageAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type RoomImageSumAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type RoomImageMinAggregateOutputType = {
    id: number | null
    roomId: number | null
    imageUrl: string | null
  }

  export type RoomImageMaxAggregateOutputType = {
    id: number | null
    roomId: number | null
    imageUrl: string | null
  }

  export type RoomImageCountAggregateOutputType = {
    id: number
    roomId: number
    imageUrl: number
    _all: number
  }


  export type RoomImageAvgAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type RoomImageSumAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type RoomImageMinAggregateInputType = {
    id?: true
    roomId?: true
    imageUrl?: true
  }

  export type RoomImageMaxAggregateInputType = {
    id?: true
    roomId?: true
    imageUrl?: true
  }

  export type RoomImageCountAggregateInputType = {
    id?: true
    roomId?: true
    imageUrl?: true
    _all?: true
  }

  export type RoomImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomImage to aggregate.
     */
    where?: RoomImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomImages
    **/
    _count?: true | RoomImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomImageMaxAggregateInputType
  }

  export type GetRoomImageAggregateType<T extends RoomImageAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomImage[P]>
      : GetScalarType<T[P], AggregateRoomImage[P]>
  }




  export type RoomImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomImageWhereInput
    orderBy?: RoomImageOrderByWithAggregationInput | RoomImageOrderByWithAggregationInput[]
    by: RoomImageScalarFieldEnum[] | RoomImageScalarFieldEnum
    having?: RoomImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomImageCountAggregateInputType | true
    _avg?: RoomImageAvgAggregateInputType
    _sum?: RoomImageSumAggregateInputType
    _min?: RoomImageMinAggregateInputType
    _max?: RoomImageMaxAggregateInputType
  }

  export type RoomImageGroupByOutputType = {
    id: number
    roomId: number
    imageUrl: string
    _count: RoomImageCountAggregateOutputType | null
    _avg: RoomImageAvgAggregateOutputType | null
    _sum: RoomImageSumAggregateOutputType | null
    _min: RoomImageMinAggregateOutputType | null
    _max: RoomImageMaxAggregateOutputType | null
  }

  type GetRoomImageGroupByPayload<T extends RoomImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomImageGroupByOutputType[P]>
            : GetScalarType<T[P], RoomImageGroupByOutputType[P]>
        }
      >
    >


  export type RoomImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    imageUrl?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomImage"]>

  export type RoomImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    imageUrl?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomImage"]>

  export type RoomImageSelectScalar = {
    id?: boolean
    roomId?: boolean
    imageUrl?: boolean
  }

  export type RoomImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type RoomImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $RoomImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomImage"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomId: number
      imageUrl: string
    }, ExtArgs["result"]["roomImage"]>
    composites: {}
  }

  type RoomImageGetPayload<S extends boolean | null | undefined | RoomImageDefaultArgs> = $Result.GetResult<Prisma.$RoomImagePayload, S>

  type RoomImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoomImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoomImageCountAggregateInputType | true
    }

  export interface RoomImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomImage'], meta: { name: 'RoomImage' } }
    /**
     * Find zero or one RoomImage that matches the filter.
     * @param {RoomImageFindUniqueArgs} args - Arguments to find a RoomImage
     * @example
     * // Get one RoomImage
     * const roomImage = await prisma.roomImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomImageFindUniqueArgs>(args: SelectSubset<T, RoomImageFindUniqueArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RoomImage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoomImageFindUniqueOrThrowArgs} args - Arguments to find a RoomImage
     * @example
     * // Get one RoomImage
     * const roomImage = await prisma.roomImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomImageFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RoomImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageFindFirstArgs} args - Arguments to find a RoomImage
     * @example
     * // Get one RoomImage
     * const roomImage = await prisma.roomImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomImageFindFirstArgs>(args?: SelectSubset<T, RoomImageFindFirstArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RoomImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageFindFirstOrThrowArgs} args - Arguments to find a RoomImage
     * @example
     * // Get one RoomImage
     * const roomImage = await prisma.roomImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomImageFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RoomImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomImages
     * const roomImages = await prisma.roomImage.findMany()
     * 
     * // Get first 10 RoomImages
     * const roomImages = await prisma.roomImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomImageWithIdOnly = await prisma.roomImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomImageFindManyArgs>(args?: SelectSubset<T, RoomImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RoomImage.
     * @param {RoomImageCreateArgs} args - Arguments to create a RoomImage.
     * @example
     * // Create one RoomImage
     * const RoomImage = await prisma.roomImage.create({
     *   data: {
     *     // ... data to create a RoomImage
     *   }
     * })
     * 
     */
    create<T extends RoomImageCreateArgs>(args: SelectSubset<T, RoomImageCreateArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RoomImages.
     * @param {RoomImageCreateManyArgs} args - Arguments to create many RoomImages.
     * @example
     * // Create many RoomImages
     * const roomImage = await prisma.roomImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomImageCreateManyArgs>(args?: SelectSubset<T, RoomImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomImages and returns the data saved in the database.
     * @param {RoomImageCreateManyAndReturnArgs} args - Arguments to create many RoomImages.
     * @example
     * // Create many RoomImages
     * const roomImage = await prisma.roomImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomImages and only return the `id`
     * const roomImageWithIdOnly = await prisma.roomImage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomImageCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RoomImage.
     * @param {RoomImageDeleteArgs} args - Arguments to delete one RoomImage.
     * @example
     * // Delete one RoomImage
     * const RoomImage = await prisma.roomImage.delete({
     *   where: {
     *     // ... filter to delete one RoomImage
     *   }
     * })
     * 
     */
    delete<T extends RoomImageDeleteArgs>(args: SelectSubset<T, RoomImageDeleteArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RoomImage.
     * @param {RoomImageUpdateArgs} args - Arguments to update one RoomImage.
     * @example
     * // Update one RoomImage
     * const roomImage = await prisma.roomImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomImageUpdateArgs>(args: SelectSubset<T, RoomImageUpdateArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RoomImages.
     * @param {RoomImageDeleteManyArgs} args - Arguments to filter RoomImages to delete.
     * @example
     * // Delete a few RoomImages
     * const { count } = await prisma.roomImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomImageDeleteManyArgs>(args?: SelectSubset<T, RoomImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomImages
     * const roomImage = await prisma.roomImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomImageUpdateManyArgs>(args: SelectSubset<T, RoomImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomImage.
     * @param {RoomImageUpsertArgs} args - Arguments to update or create a RoomImage.
     * @example
     * // Update or create a RoomImage
     * const roomImage = await prisma.roomImage.upsert({
     *   create: {
     *     // ... data to create a RoomImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomImage we want to update
     *   }
     * })
     */
    upsert<T extends RoomImageUpsertArgs>(args: SelectSubset<T, RoomImageUpsertArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RoomImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageCountArgs} args - Arguments to filter RoomImages to count.
     * @example
     * // Count the number of RoomImages
     * const count = await prisma.roomImage.count({
     *   where: {
     *     // ... the filter for the RoomImages we want to count
     *   }
     * })
    **/
    count<T extends RoomImageCountArgs>(
      args?: Subset<T, RoomImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomImageAggregateArgs>(args: Subset<T, RoomImageAggregateArgs>): Prisma.PrismaPromise<GetRoomImageAggregateType<T>>

    /**
     * Group by RoomImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomImageGroupByArgs['orderBy'] }
        : { orderBy?: RoomImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomImage model
   */
  readonly fields: RoomImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomImage model
   */ 
  interface RoomImageFieldRefs {
    readonly id: FieldRef<"RoomImage", 'Int'>
    readonly roomId: FieldRef<"RoomImage", 'Int'>
    readonly imageUrl: FieldRef<"RoomImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RoomImage findUnique
   */
  export type RoomImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImage to fetch.
     */
    where: RoomImageWhereUniqueInput
  }

  /**
   * RoomImage findUniqueOrThrow
   */
  export type RoomImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImage to fetch.
     */
    where: RoomImageWhereUniqueInput
  }

  /**
   * RoomImage findFirst
   */
  export type RoomImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImage to fetch.
     */
    where?: RoomImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomImages.
     */
    cursor?: RoomImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomImages.
     */
    distinct?: RoomImageScalarFieldEnum | RoomImageScalarFieldEnum[]
  }

  /**
   * RoomImage findFirstOrThrow
   */
  export type RoomImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImage to fetch.
     */
    where?: RoomImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomImages.
     */
    cursor?: RoomImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomImages.
     */
    distinct?: RoomImageScalarFieldEnum | RoomImageScalarFieldEnum[]
  }

  /**
   * RoomImage findMany
   */
  export type RoomImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImages to fetch.
     */
    where?: RoomImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomImages.
     */
    cursor?: RoomImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    distinct?: RoomImageScalarFieldEnum | RoomImageScalarFieldEnum[]
  }

  /**
   * RoomImage create
   */
  export type RoomImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomImage.
     */
    data: XOR<RoomImageCreateInput, RoomImageUncheckedCreateInput>
  }

  /**
   * RoomImage createMany
   */
  export type RoomImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomImages.
     */
    data: RoomImageCreateManyInput | RoomImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomImage createManyAndReturn
   */
  export type RoomImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RoomImages.
     */
    data: RoomImageCreateManyInput | RoomImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomImage update
   */
  export type RoomImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomImage.
     */
    data: XOR<RoomImageUpdateInput, RoomImageUncheckedUpdateInput>
    /**
     * Choose, which RoomImage to update.
     */
    where: RoomImageWhereUniqueInput
  }

  /**
   * RoomImage updateMany
   */
  export type RoomImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomImages.
     */
    data: XOR<RoomImageUpdateManyMutationInput, RoomImageUncheckedUpdateManyInput>
    /**
     * Filter which RoomImages to update
     */
    where?: RoomImageWhereInput
  }

  /**
   * RoomImage upsert
   */
  export type RoomImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomImage to update in case it exists.
     */
    where: RoomImageWhereUniqueInput
    /**
     * In case the RoomImage found by the `where` argument doesn't exist, create a new RoomImage with this data.
     */
    create: XOR<RoomImageCreateInput, RoomImageUncheckedCreateInput>
    /**
     * In case the RoomImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomImageUpdateInput, RoomImageUncheckedUpdateInput>
  }

  /**
   * RoomImage delete
   */
  export type RoomImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter which RoomImage to delete.
     */
    where: RoomImageWhereUniqueInput
  }

  /**
   * RoomImage deleteMany
   */
  export type RoomImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomImages to delete
     */
    where?: RoomImageWhereInput
  }

  /**
   * RoomImage without action
   */
  export type RoomImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
  }


  /**
   * Model RoomAvailability
   */

  export type AggregateRoomAvailability = {
    _count: RoomAvailabilityCountAggregateOutputType | null
    _avg: RoomAvailabilityAvgAggregateOutputType | null
    _sum: RoomAvailabilitySumAggregateOutputType | null
    _min: RoomAvailabilityMinAggregateOutputType | null
    _max: RoomAvailabilityMaxAggregateOutputType | null
  }

  export type RoomAvailabilityAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
    price: number | null
  }

  export type RoomAvailabilitySumAggregateOutputType = {
    id: number | null
    roomId: number | null
    price: number | null
  }

  export type RoomAvailabilityMinAggregateOutputType = {
    id: number | null
    roomId: number | null
    isAvailable: boolean | null
    date: Date | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomAvailabilityMaxAggregateOutputType = {
    id: number | null
    roomId: number | null
    isAvailable: boolean | null
    date: Date | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomAvailabilityCountAggregateOutputType = {
    id: number
    roomId: number
    isAvailable: number
    date: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvailabilityAvgAggregateInputType = {
    id?: true
    roomId?: true
    price?: true
  }

  export type RoomAvailabilitySumAggregateInputType = {
    id?: true
    roomId?: true
    price?: true
  }

  export type RoomAvailabilityMinAggregateInputType = {
    id?: true
    roomId?: true
    isAvailable?: true
    date?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomAvailabilityMaxAggregateInputType = {
    id?: true
    roomId?: true
    isAvailable?: true
    date?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomAvailabilityCountAggregateInputType = {
    id?: true
    roomId?: true
    isAvailable?: true
    date?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomAvailability to aggregate.
     */
    where?: RoomAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAvailabilities to fetch.
     */
    orderBy?: RoomAvailabilityOrderByWithRelationInput | RoomAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomAvailabilities
    **/
    _count?: true | RoomAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomAvailabilityMaxAggregateInputType
  }

  export type GetRoomAvailabilityAggregateType<T extends RoomAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomAvailability[P]>
      : GetScalarType<T[P], AggregateRoomAvailability[P]>
  }




  export type RoomAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomAvailabilityWhereInput
    orderBy?: RoomAvailabilityOrderByWithAggregationInput | RoomAvailabilityOrderByWithAggregationInput[]
    by: RoomAvailabilityScalarFieldEnum[] | RoomAvailabilityScalarFieldEnum
    having?: RoomAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomAvailabilityCountAggregateInputType | true
    _avg?: RoomAvailabilityAvgAggregateInputType
    _sum?: RoomAvailabilitySumAggregateInputType
    _min?: RoomAvailabilityMinAggregateInputType
    _max?: RoomAvailabilityMaxAggregateInputType
  }

  export type RoomAvailabilityGroupByOutputType = {
    id: number
    roomId: number
    isAvailable: boolean
    date: Date
    price: number
    createdAt: Date
    updatedAt: Date
    _count: RoomAvailabilityCountAggregateOutputType | null
    _avg: RoomAvailabilityAvgAggregateOutputType | null
    _sum: RoomAvailabilitySumAggregateOutputType | null
    _min: RoomAvailabilityMinAggregateOutputType | null
    _max: RoomAvailabilityMaxAggregateOutputType | null
  }

  type GetRoomAvailabilityGroupByPayload<T extends RoomAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], RoomAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type RoomAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    isAvailable?: boolean
    date?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomAvailability"]>

  export type RoomAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    isAvailable?: boolean
    date?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomAvailability"]>

  export type RoomAvailabilitySelectScalar = {
    id?: boolean
    roomId?: boolean
    isAvailable?: boolean
    date?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type RoomAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $RoomAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomAvailability"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomId: number
      isAvailable: boolean
      date: Date
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roomAvailability"]>
    composites: {}
  }

  type RoomAvailabilityGetPayload<S extends boolean | null | undefined | RoomAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$RoomAvailabilityPayload, S>

  type RoomAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoomAvailabilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoomAvailabilityCountAggregateInputType | true
    }

  export interface RoomAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomAvailability'], meta: { name: 'RoomAvailability' } }
    /**
     * Find zero or one RoomAvailability that matches the filter.
     * @param {RoomAvailabilityFindUniqueArgs} args - Arguments to find a RoomAvailability
     * @example
     * // Get one RoomAvailability
     * const roomAvailability = await prisma.roomAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomAvailabilityFindUniqueArgs>(args: SelectSubset<T, RoomAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RoomAvailability that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoomAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a RoomAvailability
     * @example
     * // Get one RoomAvailability
     * const roomAvailability = await prisma.roomAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RoomAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityFindFirstArgs} args - Arguments to find a RoomAvailability
     * @example
     * // Get one RoomAvailability
     * const roomAvailability = await prisma.roomAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomAvailabilityFindFirstArgs>(args?: SelectSubset<T, RoomAvailabilityFindFirstArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RoomAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityFindFirstOrThrowArgs} args - Arguments to find a RoomAvailability
     * @example
     * // Get one RoomAvailability
     * const roomAvailability = await prisma.roomAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RoomAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomAvailabilities
     * const roomAvailabilities = await prisma.roomAvailability.findMany()
     * 
     * // Get first 10 RoomAvailabilities
     * const roomAvailabilities = await prisma.roomAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomAvailabilityWithIdOnly = await prisma.roomAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomAvailabilityFindManyArgs>(args?: SelectSubset<T, RoomAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RoomAvailability.
     * @param {RoomAvailabilityCreateArgs} args - Arguments to create a RoomAvailability.
     * @example
     * // Create one RoomAvailability
     * const RoomAvailability = await prisma.roomAvailability.create({
     *   data: {
     *     // ... data to create a RoomAvailability
     *   }
     * })
     * 
     */
    create<T extends RoomAvailabilityCreateArgs>(args: SelectSubset<T, RoomAvailabilityCreateArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RoomAvailabilities.
     * @param {RoomAvailabilityCreateManyArgs} args - Arguments to create many RoomAvailabilities.
     * @example
     * // Create many RoomAvailabilities
     * const roomAvailability = await prisma.roomAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomAvailabilityCreateManyArgs>(args?: SelectSubset<T, RoomAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomAvailabilities and returns the data saved in the database.
     * @param {RoomAvailabilityCreateManyAndReturnArgs} args - Arguments to create many RoomAvailabilities.
     * @example
     * // Create many RoomAvailabilities
     * const roomAvailability = await prisma.roomAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomAvailabilities and only return the `id`
     * const roomAvailabilityWithIdOnly = await prisma.roomAvailability.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RoomAvailability.
     * @param {RoomAvailabilityDeleteArgs} args - Arguments to delete one RoomAvailability.
     * @example
     * // Delete one RoomAvailability
     * const RoomAvailability = await prisma.roomAvailability.delete({
     *   where: {
     *     // ... filter to delete one RoomAvailability
     *   }
     * })
     * 
     */
    delete<T extends RoomAvailabilityDeleteArgs>(args: SelectSubset<T, RoomAvailabilityDeleteArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RoomAvailability.
     * @param {RoomAvailabilityUpdateArgs} args - Arguments to update one RoomAvailability.
     * @example
     * // Update one RoomAvailability
     * const roomAvailability = await prisma.roomAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomAvailabilityUpdateArgs>(args: SelectSubset<T, RoomAvailabilityUpdateArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RoomAvailabilities.
     * @param {RoomAvailabilityDeleteManyArgs} args - Arguments to filter RoomAvailabilities to delete.
     * @example
     * // Delete a few RoomAvailabilities
     * const { count } = await prisma.roomAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomAvailabilityDeleteManyArgs>(args?: SelectSubset<T, RoomAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomAvailabilities
     * const roomAvailability = await prisma.roomAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomAvailabilityUpdateManyArgs>(args: SelectSubset<T, RoomAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomAvailability.
     * @param {RoomAvailabilityUpsertArgs} args - Arguments to update or create a RoomAvailability.
     * @example
     * // Update or create a RoomAvailability
     * const roomAvailability = await prisma.roomAvailability.upsert({
     *   create: {
     *     // ... data to create a RoomAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomAvailability we want to update
     *   }
     * })
     */
    upsert<T extends RoomAvailabilityUpsertArgs>(args: SelectSubset<T, RoomAvailabilityUpsertArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RoomAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityCountArgs} args - Arguments to filter RoomAvailabilities to count.
     * @example
     * // Count the number of RoomAvailabilities
     * const count = await prisma.roomAvailability.count({
     *   where: {
     *     // ... the filter for the RoomAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends RoomAvailabilityCountArgs>(
      args?: Subset<T, RoomAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAvailabilityAggregateArgs>(args: Subset<T, RoomAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetRoomAvailabilityAggregateType<T>>

    /**
     * Group by RoomAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: RoomAvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomAvailability model
   */
  readonly fields: RoomAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomAvailability model
   */ 
  interface RoomAvailabilityFieldRefs {
    readonly id: FieldRef<"RoomAvailability", 'Int'>
    readonly roomId: FieldRef<"RoomAvailability", 'Int'>
    readonly isAvailable: FieldRef<"RoomAvailability", 'Boolean'>
    readonly date: FieldRef<"RoomAvailability", 'DateTime'>
    readonly price: FieldRef<"RoomAvailability", 'Float'>
    readonly createdAt: FieldRef<"RoomAvailability", 'DateTime'>
    readonly updatedAt: FieldRef<"RoomAvailability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomAvailability findUnique
   */
  export type RoomAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailability to fetch.
     */
    where: RoomAvailabilityWhereUniqueInput
  }

  /**
   * RoomAvailability findUniqueOrThrow
   */
  export type RoomAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailability to fetch.
     */
    where: RoomAvailabilityWhereUniqueInput
  }

  /**
   * RoomAvailability findFirst
   */
  export type RoomAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailability to fetch.
     */
    where?: RoomAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAvailabilities to fetch.
     */
    orderBy?: RoomAvailabilityOrderByWithRelationInput | RoomAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomAvailabilities.
     */
    cursor?: RoomAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomAvailabilities.
     */
    distinct?: RoomAvailabilityScalarFieldEnum | RoomAvailabilityScalarFieldEnum[]
  }

  /**
   * RoomAvailability findFirstOrThrow
   */
  export type RoomAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailability to fetch.
     */
    where?: RoomAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAvailabilities to fetch.
     */
    orderBy?: RoomAvailabilityOrderByWithRelationInput | RoomAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomAvailabilities.
     */
    cursor?: RoomAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomAvailabilities.
     */
    distinct?: RoomAvailabilityScalarFieldEnum | RoomAvailabilityScalarFieldEnum[]
  }

  /**
   * RoomAvailability findMany
   */
  export type RoomAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailabilities to fetch.
     */
    where?: RoomAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAvailabilities to fetch.
     */
    orderBy?: RoomAvailabilityOrderByWithRelationInput | RoomAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomAvailabilities.
     */
    cursor?: RoomAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAvailabilities.
     */
    skip?: number
    distinct?: RoomAvailabilityScalarFieldEnum | RoomAvailabilityScalarFieldEnum[]
  }

  /**
   * RoomAvailability create
   */
  export type RoomAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomAvailability.
     */
    data: XOR<RoomAvailabilityCreateInput, RoomAvailabilityUncheckedCreateInput>
  }

  /**
   * RoomAvailability createMany
   */
  export type RoomAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomAvailabilities.
     */
    data: RoomAvailabilityCreateManyInput | RoomAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomAvailability createManyAndReturn
   */
  export type RoomAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RoomAvailabilities.
     */
    data: RoomAvailabilityCreateManyInput | RoomAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomAvailability update
   */
  export type RoomAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomAvailability.
     */
    data: XOR<RoomAvailabilityUpdateInput, RoomAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which RoomAvailability to update.
     */
    where: RoomAvailabilityWhereUniqueInput
  }

  /**
   * RoomAvailability updateMany
   */
  export type RoomAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomAvailabilities.
     */
    data: XOR<RoomAvailabilityUpdateManyMutationInput, RoomAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which RoomAvailabilities to update
     */
    where?: RoomAvailabilityWhereInput
  }

  /**
   * RoomAvailability upsert
   */
  export type RoomAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomAvailability to update in case it exists.
     */
    where: RoomAvailabilityWhereUniqueInput
    /**
     * In case the RoomAvailability found by the `where` argument doesn't exist, create a new RoomAvailability with this data.
     */
    create: XOR<RoomAvailabilityCreateInput, RoomAvailabilityUncheckedCreateInput>
    /**
     * In case the RoomAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomAvailabilityUpdateInput, RoomAvailabilityUncheckedUpdateInput>
  }

  /**
   * RoomAvailability delete
   */
  export type RoomAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which RoomAvailability to delete.
     */
    where: RoomAvailabilityWhereUniqueInput
  }

  /**
   * RoomAvailability deleteMany
   */
  export type RoomAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomAvailabilities to delete
     */
    where?: RoomAvailabilityWhereInput
  }

  /**
   * RoomAvailability without action
   */
  export type RoomAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    totalPrice: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    totalPrice: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    invoiceNumber: string | null
    checkIn: Date | null
    checkOut: Date | null
    totalPrice: number | null
    status: $Enums.BookingStatus | null
    paymentDeadline: Date | null
    paymentProof: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    invoiceNumber: string | null
    checkIn: Date | null
    checkOut: Date | null
    totalPrice: number | null
    status: $Enums.BookingStatus | null
    paymentDeadline: Date | null
    paymentProof: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    propertyId: number
    invoiceNumber: number
    checkIn: number
    checkOut: number
    totalPrice: number
    status: number
    paymentDeadline: number
    paymentProof: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    totalPrice?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    totalPrice?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    invoiceNumber?: true
    checkIn?: true
    checkOut?: true
    totalPrice?: true
    status?: true
    paymentDeadline?: true
    paymentProof?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    invoiceNumber?: true
    checkIn?: true
    checkOut?: true
    totalPrice?: true
    status?: true
    paymentDeadline?: true
    paymentProof?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    invoiceNumber?: true
    checkIn?: true
    checkOut?: true
    totalPrice?: true
    status?: true
    paymentDeadline?: true
    paymentProof?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    userId: number
    propertyId: number
    invoiceNumber: string
    checkIn: Date
    checkOut: Date
    totalPrice: number
    status: $Enums.BookingStatus
    paymentDeadline: Date
    paymentProof: string | null
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    invoiceNumber?: boolean
    checkIn?: boolean
    checkOut?: boolean
    totalPrice?: boolean
    status?: boolean
    paymentDeadline?: boolean
    paymentProof?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    bookingRooms?: boolean | Booking$bookingRoomsArgs<ExtArgs>
    review?: boolean | Booking$reviewArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    invoiceNumber?: boolean
    checkIn?: boolean
    checkOut?: boolean
    totalPrice?: boolean
    status?: boolean
    paymentDeadline?: boolean
    paymentProof?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    invoiceNumber?: boolean
    checkIn?: boolean
    checkOut?: boolean
    totalPrice?: boolean
    status?: boolean
    paymentDeadline?: boolean
    paymentProof?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    bookingRooms?: boolean | Booking$bookingRoomsArgs<ExtArgs>
    review?: boolean | Booking$reviewArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>
      bookingRooms: Prisma.$BookingRoomPayload<ExtArgs>[]
      review: Prisma.$ReviewPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      propertyId: number
      invoiceNumber: string
      checkIn: Date
      checkOut: Date
      totalPrice: number
      status: $Enums.BookingStatus
      paymentDeadline: Date
      paymentProof: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    bookingRooms<T extends Booking$bookingRoomsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$bookingRoomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findMany"> | Null>
    review<T extends Booking$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Booking$reviewArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */ 
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly userId: FieldRef<"Booking", 'Int'>
    readonly propertyId: FieldRef<"Booking", 'Int'>
    readonly invoiceNumber: FieldRef<"Booking", 'String'>
    readonly checkIn: FieldRef<"Booking", 'DateTime'>
    readonly checkOut: FieldRef<"Booking", 'DateTime'>
    readonly totalPrice: FieldRef<"Booking", 'Float'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly paymentDeadline: FieldRef<"Booking", 'DateTime'>
    readonly paymentProof: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
  }

  /**
   * Booking.bookingRooms
   */
  export type Booking$bookingRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    where?: BookingRoomWhereInput
    orderBy?: BookingRoomOrderByWithRelationInput | BookingRoomOrderByWithRelationInput[]
    cursor?: BookingRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingRoomScalarFieldEnum | BookingRoomScalarFieldEnum[]
  }

  /**
   * Booking.review
   */
  export type Booking$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model BookingRoom
   */

  export type AggregateBookingRoom = {
    _count: BookingRoomCountAggregateOutputType | null
    _avg: BookingRoomAvgAggregateOutputType | null
    _sum: BookingRoomSumAggregateOutputType | null
    _min: BookingRoomMinAggregateOutputType | null
    _max: BookingRoomMaxAggregateOutputType | null
  }

  export type BookingRoomAvgAggregateOutputType = {
    id: number | null
    bookingId: number | null
    roomId: number | null
    guestCount: number | null
    pricePerNight: number | null
    numberOfNights: number | null
    totalPrice: number | null
  }

  export type BookingRoomSumAggregateOutputType = {
    id: number | null
    bookingId: number | null
    roomId: number | null
    guestCount: number | null
    pricePerNight: number | null
    numberOfNights: number | null
    totalPrice: number | null
  }

  export type BookingRoomMinAggregateOutputType = {
    id: number | null
    bookingId: number | null
    roomId: number | null
    guestCount: number | null
    pricePerNight: number | null
    numberOfNights: number | null
    totalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingRoomMaxAggregateOutputType = {
    id: number | null
    bookingId: number | null
    roomId: number | null
    guestCount: number | null
    pricePerNight: number | null
    numberOfNights: number | null
    totalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingRoomCountAggregateOutputType = {
    id: number
    bookingId: number
    roomId: number
    guestCount: number
    pricePerNight: number
    numberOfNights: number
    totalPrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingRoomAvgAggregateInputType = {
    id?: true
    bookingId?: true
    roomId?: true
    guestCount?: true
    pricePerNight?: true
    numberOfNights?: true
    totalPrice?: true
  }

  export type BookingRoomSumAggregateInputType = {
    id?: true
    bookingId?: true
    roomId?: true
    guestCount?: true
    pricePerNight?: true
    numberOfNights?: true
    totalPrice?: true
  }

  export type BookingRoomMinAggregateInputType = {
    id?: true
    bookingId?: true
    roomId?: true
    guestCount?: true
    pricePerNight?: true
    numberOfNights?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingRoomMaxAggregateInputType = {
    id?: true
    bookingId?: true
    roomId?: true
    guestCount?: true
    pricePerNight?: true
    numberOfNights?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingRoomCountAggregateInputType = {
    id?: true
    bookingId?: true
    roomId?: true
    guestCount?: true
    pricePerNight?: true
    numberOfNights?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingRoom to aggregate.
     */
    where?: BookingRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingRooms to fetch.
     */
    orderBy?: BookingRoomOrderByWithRelationInput | BookingRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingRooms
    **/
    _count?: true | BookingRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingRoomMaxAggregateInputType
  }

  export type GetBookingRoomAggregateType<T extends BookingRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingRoom[P]>
      : GetScalarType<T[P], AggregateBookingRoom[P]>
  }




  export type BookingRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingRoomWhereInput
    orderBy?: BookingRoomOrderByWithAggregationInput | BookingRoomOrderByWithAggregationInput[]
    by: BookingRoomScalarFieldEnum[] | BookingRoomScalarFieldEnum
    having?: BookingRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingRoomCountAggregateInputType | true
    _avg?: BookingRoomAvgAggregateInputType
    _sum?: BookingRoomSumAggregateInputType
    _min?: BookingRoomMinAggregateInputType
    _max?: BookingRoomMaxAggregateInputType
  }

  export type BookingRoomGroupByOutputType = {
    id: number
    bookingId: number
    roomId: number
    guestCount: number
    pricePerNight: number
    numberOfNights: number
    totalPrice: number
    createdAt: Date
    updatedAt: Date
    _count: BookingRoomCountAggregateOutputType | null
    _avg: BookingRoomAvgAggregateOutputType | null
    _sum: BookingRoomSumAggregateOutputType | null
    _min: BookingRoomMinAggregateOutputType | null
    _max: BookingRoomMaxAggregateOutputType | null
  }

  type GetBookingRoomGroupByPayload<T extends BookingRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingRoomGroupByOutputType[P]>
            : GetScalarType<T[P], BookingRoomGroupByOutputType[P]>
        }
      >
    >


  export type BookingRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    roomId?: boolean
    guestCount?: boolean
    pricePerNight?: boolean
    numberOfNights?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingRoom"]>

  export type BookingRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    roomId?: boolean
    guestCount?: boolean
    pricePerNight?: boolean
    numberOfNights?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingRoom"]>

  export type BookingRoomSelectScalar = {
    id?: boolean
    bookingId?: boolean
    roomId?: boolean
    guestCount?: boolean
    pricePerNight?: boolean
    numberOfNights?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type BookingRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $BookingRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingRoom"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookingId: number
      roomId: number
      guestCount: number
      pricePerNight: number
      numberOfNights: number
      totalPrice: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bookingRoom"]>
    composites: {}
  }

  type BookingRoomGetPayload<S extends boolean | null | undefined | BookingRoomDefaultArgs> = $Result.GetResult<Prisma.$BookingRoomPayload, S>

  type BookingRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookingRoomFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookingRoomCountAggregateInputType | true
    }

  export interface BookingRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingRoom'], meta: { name: 'BookingRoom' } }
    /**
     * Find zero or one BookingRoom that matches the filter.
     * @param {BookingRoomFindUniqueArgs} args - Arguments to find a BookingRoom
     * @example
     * // Get one BookingRoom
     * const bookingRoom = await prisma.bookingRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingRoomFindUniqueArgs>(args: SelectSubset<T, BookingRoomFindUniqueArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BookingRoom that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookingRoomFindUniqueOrThrowArgs} args - Arguments to find a BookingRoom
     * @example
     * // Get one BookingRoom
     * const bookingRoom = await prisma.bookingRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BookingRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomFindFirstArgs} args - Arguments to find a BookingRoom
     * @example
     * // Get one BookingRoom
     * const bookingRoom = await prisma.bookingRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingRoomFindFirstArgs>(args?: SelectSubset<T, BookingRoomFindFirstArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BookingRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomFindFirstOrThrowArgs} args - Arguments to find a BookingRoom
     * @example
     * // Get one BookingRoom
     * const bookingRoom = await prisma.bookingRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BookingRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingRooms
     * const bookingRooms = await prisma.bookingRoom.findMany()
     * 
     * // Get first 10 BookingRooms
     * const bookingRooms = await prisma.bookingRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingRoomWithIdOnly = await prisma.bookingRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingRoomFindManyArgs>(args?: SelectSubset<T, BookingRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BookingRoom.
     * @param {BookingRoomCreateArgs} args - Arguments to create a BookingRoom.
     * @example
     * // Create one BookingRoom
     * const BookingRoom = await prisma.bookingRoom.create({
     *   data: {
     *     // ... data to create a BookingRoom
     *   }
     * })
     * 
     */
    create<T extends BookingRoomCreateArgs>(args: SelectSubset<T, BookingRoomCreateArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BookingRooms.
     * @param {BookingRoomCreateManyArgs} args - Arguments to create many BookingRooms.
     * @example
     * // Create many BookingRooms
     * const bookingRoom = await prisma.bookingRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingRoomCreateManyArgs>(args?: SelectSubset<T, BookingRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingRooms and returns the data saved in the database.
     * @param {BookingRoomCreateManyAndReturnArgs} args - Arguments to create many BookingRooms.
     * @example
     * // Create many BookingRooms
     * const bookingRoom = await prisma.bookingRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingRooms and only return the `id`
     * const bookingRoomWithIdOnly = await prisma.bookingRoom.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BookingRoom.
     * @param {BookingRoomDeleteArgs} args - Arguments to delete one BookingRoom.
     * @example
     * // Delete one BookingRoom
     * const BookingRoom = await prisma.bookingRoom.delete({
     *   where: {
     *     // ... filter to delete one BookingRoom
     *   }
     * })
     * 
     */
    delete<T extends BookingRoomDeleteArgs>(args: SelectSubset<T, BookingRoomDeleteArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BookingRoom.
     * @param {BookingRoomUpdateArgs} args - Arguments to update one BookingRoom.
     * @example
     * // Update one BookingRoom
     * const bookingRoom = await prisma.bookingRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingRoomUpdateArgs>(args: SelectSubset<T, BookingRoomUpdateArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BookingRooms.
     * @param {BookingRoomDeleteManyArgs} args - Arguments to filter BookingRooms to delete.
     * @example
     * // Delete a few BookingRooms
     * const { count } = await prisma.bookingRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingRoomDeleteManyArgs>(args?: SelectSubset<T, BookingRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingRooms
     * const bookingRoom = await prisma.bookingRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingRoomUpdateManyArgs>(args: SelectSubset<T, BookingRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookingRoom.
     * @param {BookingRoomUpsertArgs} args - Arguments to update or create a BookingRoom.
     * @example
     * // Update or create a BookingRoom
     * const bookingRoom = await prisma.bookingRoom.upsert({
     *   create: {
     *     // ... data to create a BookingRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingRoom we want to update
     *   }
     * })
     */
    upsert<T extends BookingRoomUpsertArgs>(args: SelectSubset<T, BookingRoomUpsertArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BookingRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomCountArgs} args - Arguments to filter BookingRooms to count.
     * @example
     * // Count the number of BookingRooms
     * const count = await prisma.bookingRoom.count({
     *   where: {
     *     // ... the filter for the BookingRooms we want to count
     *   }
     * })
    **/
    count<T extends BookingRoomCountArgs>(
      args?: Subset<T, BookingRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingRoomAggregateArgs>(args: Subset<T, BookingRoomAggregateArgs>): Prisma.PrismaPromise<GetBookingRoomAggregateType<T>>

    /**
     * Group by BookingRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingRoomGroupByArgs['orderBy'] }
        : { orderBy?: BookingRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingRoom model
   */
  readonly fields: BookingRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookingRoom model
   */ 
  interface BookingRoomFieldRefs {
    readonly id: FieldRef<"BookingRoom", 'Int'>
    readonly bookingId: FieldRef<"BookingRoom", 'Int'>
    readonly roomId: FieldRef<"BookingRoom", 'Int'>
    readonly guestCount: FieldRef<"BookingRoom", 'Int'>
    readonly pricePerNight: FieldRef<"BookingRoom", 'Float'>
    readonly numberOfNights: FieldRef<"BookingRoom", 'Int'>
    readonly totalPrice: FieldRef<"BookingRoom", 'Float'>
    readonly createdAt: FieldRef<"BookingRoom", 'DateTime'>
    readonly updatedAt: FieldRef<"BookingRoom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookingRoom findUnique
   */
  export type BookingRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * Filter, which BookingRoom to fetch.
     */
    where: BookingRoomWhereUniqueInput
  }

  /**
   * BookingRoom findUniqueOrThrow
   */
  export type BookingRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * Filter, which BookingRoom to fetch.
     */
    where: BookingRoomWhereUniqueInput
  }

  /**
   * BookingRoom findFirst
   */
  export type BookingRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * Filter, which BookingRoom to fetch.
     */
    where?: BookingRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingRooms to fetch.
     */
    orderBy?: BookingRoomOrderByWithRelationInput | BookingRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingRooms.
     */
    cursor?: BookingRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingRooms.
     */
    distinct?: BookingRoomScalarFieldEnum | BookingRoomScalarFieldEnum[]
  }

  /**
   * BookingRoom findFirstOrThrow
   */
  export type BookingRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * Filter, which BookingRoom to fetch.
     */
    where?: BookingRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingRooms to fetch.
     */
    orderBy?: BookingRoomOrderByWithRelationInput | BookingRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingRooms.
     */
    cursor?: BookingRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingRooms.
     */
    distinct?: BookingRoomScalarFieldEnum | BookingRoomScalarFieldEnum[]
  }

  /**
   * BookingRoom findMany
   */
  export type BookingRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * Filter, which BookingRooms to fetch.
     */
    where?: BookingRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingRooms to fetch.
     */
    orderBy?: BookingRoomOrderByWithRelationInput | BookingRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingRooms.
     */
    cursor?: BookingRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingRooms.
     */
    skip?: number
    distinct?: BookingRoomScalarFieldEnum | BookingRoomScalarFieldEnum[]
  }

  /**
   * BookingRoom create
   */
  export type BookingRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingRoom.
     */
    data: XOR<BookingRoomCreateInput, BookingRoomUncheckedCreateInput>
  }

  /**
   * BookingRoom createMany
   */
  export type BookingRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingRooms.
     */
    data: BookingRoomCreateManyInput | BookingRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingRoom createManyAndReturn
   */
  export type BookingRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BookingRooms.
     */
    data: BookingRoomCreateManyInput | BookingRoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingRoom update
   */
  export type BookingRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingRoom.
     */
    data: XOR<BookingRoomUpdateInput, BookingRoomUncheckedUpdateInput>
    /**
     * Choose, which BookingRoom to update.
     */
    where: BookingRoomWhereUniqueInput
  }

  /**
   * BookingRoom updateMany
   */
  export type BookingRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingRooms.
     */
    data: XOR<BookingRoomUpdateManyMutationInput, BookingRoomUncheckedUpdateManyInput>
    /**
     * Filter which BookingRooms to update
     */
    where?: BookingRoomWhereInput
  }

  /**
   * BookingRoom upsert
   */
  export type BookingRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingRoom to update in case it exists.
     */
    where: BookingRoomWhereUniqueInput
    /**
     * In case the BookingRoom found by the `where` argument doesn't exist, create a new BookingRoom with this data.
     */
    create: XOR<BookingRoomCreateInput, BookingRoomUncheckedCreateInput>
    /**
     * In case the BookingRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingRoomUpdateInput, BookingRoomUncheckedUpdateInput>
  }

  /**
   * BookingRoom delete
   */
  export type BookingRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * Filter which BookingRoom to delete.
     */
    where: BookingRoomWhereUniqueInput
  }

  /**
   * BookingRoom deleteMany
   */
  export type BookingRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingRooms to delete
     */
    where?: BookingRoomWhereInput
  }

  /**
   * BookingRoom without action
   */
  export type BookingRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    bookingId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    bookingId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    bookingId: number | null
    comment: string | null
    tenantReply: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    bookingId: number | null
    comment: string | null
    tenantReply: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userId: number
    propertyId: number
    bookingId: number
    comment: number
    tenantReply: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    bookingId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    bookingId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    bookingId?: true
    comment?: true
    tenantReply?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    bookingId?: true
    comment?: true
    tenantReply?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    bookingId?: true
    comment?: true
    tenantReply?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    userId: number
    propertyId: number
    bookingId: number
    comment: string
    tenantReply: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    bookingId?: boolean
    comment?: boolean
    tenantReply?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    bookingId?: boolean
    comment?: boolean
    tenantReply?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    bookingId?: boolean
    comment?: boolean
    tenantReply?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      propertyId: number
      bookingId: number
      comment: string
      tenantReply: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly propertyId: FieldRef<"Review", 'Int'>
    readonly bookingId: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly tenantReply: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    purpose: $Enums.TokenPurpose | null
    expiresAt: Date | null
    userId: number | null
    createdAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    purpose: $Enums.TokenPurpose | null
    expiresAt: Date | null
    userId: number | null
    createdAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    token: number
    purpose: number
    expiresAt: number
    userId: number
    createdAt: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    token?: true
    purpose?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    token?: true
    purpose?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    token?: true
    purpose?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: number
    token: string
    purpose: $Enums.TokenPurpose
    expiresAt: Date
    userId: number
    createdAt: Date
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    purpose?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    purpose?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    token?: boolean
    purpose?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      purpose: $Enums.TokenPurpose
      expiresAt: Date
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */ 
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'Int'>
    readonly token: FieldRef<"Token", 'String'>
    readonly purpose: FieldRef<"Token", 'TokenPurpose'>
    readonly expiresAt: FieldRef<"Token", 'DateTime'>
    readonly userId: FieldRef<"Token", 'Int'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    role: 'role',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    profilePicture: 'profilePicture',
    provider: 'provider',
    providerId: 'providerId',
    verified: 'verified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TenantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    addressCompany: 'addressCompany',
    phoneNumberCompany: 'phoneNumberCompany',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    name: 'name',
    categoryId: 'categoryId',
    description: 'description',
    location: 'location',
    latitude: 'latitude',
    longitude: 'longitude',
    provinsi: 'provinsi',
    zipCode: 'zipCode',
    mainImage: 'mainImage',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const PropertyImageScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    imageUrl: 'imageUrl'
  };

  export type PropertyImageScalarFieldEnum = (typeof PropertyImageScalarFieldEnum)[keyof typeof PropertyImageScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    name: 'name',
    category: 'category',
    description: 'description',
    bedOption: 'bedOption',
    imageRoom: 'imageRoom',
    capacity: 'capacity',
    basePrice: 'basePrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RoomImageScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    imageUrl: 'imageUrl'
  };

  export type RoomImageScalarFieldEnum = (typeof RoomImageScalarFieldEnum)[keyof typeof RoomImageScalarFieldEnum]


  export const RoomAvailabilityScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    isAvailable: 'isAvailable',
    date: 'date',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomAvailabilityScalarFieldEnum = (typeof RoomAvailabilityScalarFieldEnum)[keyof typeof RoomAvailabilityScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    propertyId: 'propertyId',
    invoiceNumber: 'invoiceNumber',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    totalPrice: 'totalPrice',
    status: 'status',
    paymentDeadline: 'paymentDeadline',
    paymentProof: 'paymentProof',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const BookingRoomScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    roomId: 'roomId',
    guestCount: 'guestCount',
    pricePerNight: 'pricePerNight',
    numberOfNights: 'numberOfNights',
    totalPrice: 'totalPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingRoomScalarFieldEnum = (typeof BookingRoomScalarFieldEnum)[keyof typeof BookingRoomScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    propertyId: 'propertyId',
    bookingId: 'bookingId',
    comment: 'comment',
    tenantReply: 'tenantReply',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    purpose: 'purpose',
    expiresAt: 'expiresAt',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'RoomCategory'
   */
  export type EnumRoomCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomCategory'>
    


  /**
   * Reference to a field of type 'RoomCategory[]'
   */
  export type ListEnumRoomCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomCategory[]'>
    


  /**
   * Reference to a field of type 'BedOption'
   */
  export type EnumBedOptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BedOption'>
    


  /**
   * Reference to a field of type 'BedOption[]'
   */
  export type ListEnumBedOptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BedOption[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'TokenPurpose'
   */
  export type EnumTokenPurposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenPurpose'>
    


  /**
   * Reference to a field of type 'TokenPurpose[]'
   */
  export type ListEnumTokenPurposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenPurpose[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    provider?: StringNullableFilter<"User"> | string | null
    providerId?: StringNullableFilter<"User"> | string | null
    verified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenant?: XOR<TenantNullableRelationFilter, TenantWhereInput> | null
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
    tokens?: TokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    tokens?: TokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    provider_providerId?: UserProviderProviderIdCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    fullName?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    provider?: StringNullableFilter<"User"> | string | null
    providerId?: StringNullableFilter<"User"> | string | null
    verified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenant?: XOR<TenantNullableRelationFilter, TenantWhereInput> | null
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
    tokens?: TokenListRelationFilter
  }, "id" | "email" | "provider_providerId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    provider?: StringNullableWithAggregatesFilter<"User"> | string | null
    providerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    verified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: IntFilter<"Tenant"> | number
    userId?: IntFilter<"Tenant"> | number
    companyName?: StringFilter<"Tenant"> | string
    addressCompany?: StringFilter<"Tenant"> | string
    phoneNumberCompany?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    properties?: PropertyListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    addressCompany?: SortOrder
    phoneNumberCompany?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    properties?: PropertyOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    companyName?: StringFilter<"Tenant"> | string
    addressCompany?: StringFilter<"Tenant"> | string
    phoneNumberCompany?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    properties?: PropertyListRelationFilter
  }, "id" | "userId">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    addressCompany?: SortOrder
    phoneNumberCompany?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _avg?: TenantAvgOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
    _sum?: TenantSumOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tenant"> | number
    userId?: IntWithAggregatesFilter<"Tenant"> | number
    companyName?: StringWithAggregatesFilter<"Tenant"> | string
    addressCompany?: StringWithAggregatesFilter<"Tenant"> | string
    phoneNumberCompany?: StringWithAggregatesFilter<"Tenant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    properties?: PropertyListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    properties?: PropertyListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: IntFilter<"Property"> | number
    tenantId?: IntFilter<"Property"> | number
    name?: StringFilter<"Property"> | string
    categoryId?: IntFilter<"Property"> | number
    description?: StringFilter<"Property"> | string
    location?: StringFilter<"Property"> | string
    latitude?: FloatNullableFilter<"Property"> | number | null
    longitude?: FloatNullableFilter<"Property"> | number | null
    provinsi?: StringFilter<"Property"> | string
    zipCode?: StringFilter<"Property"> | string
    mainImage?: StringNullableFilter<"Property"> | string | null
    deletedAt?: DateTimeNullableFilter<"Property"> | Date | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    images?: PropertyImageListRelationFilter
    rooms?: RoomListRelationFilter
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    description?: SortOrder
    location?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    provinsi?: SortOrder
    zipCode?: SortOrder
    mainImage?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    images?: PropertyImageOrderByRelationAggregateInput
    rooms?: RoomOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    tenantId?: IntFilter<"Property"> | number
    name?: StringFilter<"Property"> | string
    categoryId?: IntFilter<"Property"> | number
    description?: StringFilter<"Property"> | string
    location?: StringFilter<"Property"> | string
    latitude?: FloatNullableFilter<"Property"> | number | null
    longitude?: FloatNullableFilter<"Property"> | number | null
    provinsi?: StringFilter<"Property"> | string
    zipCode?: StringFilter<"Property"> | string
    mainImage?: StringNullableFilter<"Property"> | string | null
    deletedAt?: DateTimeNullableFilter<"Property"> | Date | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    images?: PropertyImageListRelationFilter
    rooms?: RoomListRelationFilter
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    description?: SortOrder
    location?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    provinsi?: SortOrder
    zipCode?: SortOrder
    mainImage?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Property"> | number
    tenantId?: IntWithAggregatesFilter<"Property"> | number
    name?: StringWithAggregatesFilter<"Property"> | string
    categoryId?: IntWithAggregatesFilter<"Property"> | number
    description?: StringWithAggregatesFilter<"Property"> | string
    location?: StringWithAggregatesFilter<"Property"> | string
    latitude?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    provinsi?: StringWithAggregatesFilter<"Property"> | string
    zipCode?: StringWithAggregatesFilter<"Property"> | string
    mainImage?: StringNullableWithAggregatesFilter<"Property"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Property"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type PropertyImageWhereInput = {
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    id?: IntFilter<"PropertyImage"> | number
    propertyId?: IntFilter<"PropertyImage"> | number
    imageUrl?: StringFilter<"PropertyImage"> | string
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
  }

  export type PropertyImageOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    imageUrl?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type PropertyImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    propertyId?: IntFilter<"PropertyImage"> | number
    imageUrl?: StringFilter<"PropertyImage"> | string
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
  }, "id">

  export type PropertyImageOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    imageUrl?: SortOrder
    _count?: PropertyImageCountOrderByAggregateInput
    _avg?: PropertyImageAvgOrderByAggregateInput
    _max?: PropertyImageMaxOrderByAggregateInput
    _min?: PropertyImageMinOrderByAggregateInput
    _sum?: PropertyImageSumOrderByAggregateInput
  }

  export type PropertyImageScalarWhereWithAggregatesInput = {
    AND?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    OR?: PropertyImageScalarWhereWithAggregatesInput[]
    NOT?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyImage"> | number
    propertyId?: IntWithAggregatesFilter<"PropertyImage"> | number
    imageUrl?: StringWithAggregatesFilter<"PropertyImage"> | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: IntFilter<"Room"> | number
    propertyId?: IntFilter<"Room"> | number
    name?: StringFilter<"Room"> | string
    category?: EnumRoomCategoryFilter<"Room"> | $Enums.RoomCategory
    description?: StringFilter<"Room"> | string
    bedOption?: EnumBedOptionFilter<"Room"> | $Enums.BedOption
    imageRoom?: StringNullableFilter<"Room"> | string | null
    capacity?: IntFilter<"Room"> | number
    basePrice?: FloatFilter<"Room"> | number
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
    images?: RoomImageListRelationFilter
    availabilities?: RoomAvailabilityListRelationFilter
    bookingRooms?: BookingRoomListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    bedOption?: SortOrder
    imageRoom?: SortOrderInput | SortOrder
    capacity?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    images?: RoomImageOrderByRelationAggregateInput
    availabilities?: RoomAvailabilityOrderByRelationAggregateInput
    bookingRooms?: BookingRoomOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    propertyId?: IntFilter<"Room"> | number
    name?: StringFilter<"Room"> | string
    category?: EnumRoomCategoryFilter<"Room"> | $Enums.RoomCategory
    description?: StringFilter<"Room"> | string
    bedOption?: EnumBedOptionFilter<"Room"> | $Enums.BedOption
    imageRoom?: StringNullableFilter<"Room"> | string | null
    capacity?: IntFilter<"Room"> | number
    basePrice?: FloatFilter<"Room"> | number
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
    images?: RoomImageListRelationFilter
    availabilities?: RoomAvailabilityListRelationFilter
    bookingRooms?: BookingRoomListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    bedOption?: SortOrder
    imageRoom?: SortOrderInput | SortOrder
    capacity?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Room"> | number
    propertyId?: IntWithAggregatesFilter<"Room"> | number
    name?: StringWithAggregatesFilter<"Room"> | string
    category?: EnumRoomCategoryWithAggregatesFilter<"Room"> | $Enums.RoomCategory
    description?: StringWithAggregatesFilter<"Room"> | string
    bedOption?: EnumBedOptionWithAggregatesFilter<"Room"> | $Enums.BedOption
    imageRoom?: StringNullableWithAggregatesFilter<"Room"> | string | null
    capacity?: IntWithAggregatesFilter<"Room"> | number
    basePrice?: FloatWithAggregatesFilter<"Room"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type RoomImageWhereInput = {
    AND?: RoomImageWhereInput | RoomImageWhereInput[]
    OR?: RoomImageWhereInput[]
    NOT?: RoomImageWhereInput | RoomImageWhereInput[]
    id?: IntFilter<"RoomImage"> | number
    roomId?: IntFilter<"RoomImage"> | number
    imageUrl?: StringFilter<"RoomImage"> | string
    room?: XOR<RoomRelationFilter, RoomWhereInput>
  }

  export type RoomImageOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    imageUrl?: SortOrder
    room?: RoomOrderByWithRelationInput
  }

  export type RoomImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomImageWhereInput | RoomImageWhereInput[]
    OR?: RoomImageWhereInput[]
    NOT?: RoomImageWhereInput | RoomImageWhereInput[]
    roomId?: IntFilter<"RoomImage"> | number
    imageUrl?: StringFilter<"RoomImage"> | string
    room?: XOR<RoomRelationFilter, RoomWhereInput>
  }, "id">

  export type RoomImageOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    imageUrl?: SortOrder
    _count?: RoomImageCountOrderByAggregateInput
    _avg?: RoomImageAvgOrderByAggregateInput
    _max?: RoomImageMaxOrderByAggregateInput
    _min?: RoomImageMinOrderByAggregateInput
    _sum?: RoomImageSumOrderByAggregateInput
  }

  export type RoomImageScalarWhereWithAggregatesInput = {
    AND?: RoomImageScalarWhereWithAggregatesInput | RoomImageScalarWhereWithAggregatesInput[]
    OR?: RoomImageScalarWhereWithAggregatesInput[]
    NOT?: RoomImageScalarWhereWithAggregatesInput | RoomImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomImage"> | number
    roomId?: IntWithAggregatesFilter<"RoomImage"> | number
    imageUrl?: StringWithAggregatesFilter<"RoomImage"> | string
  }

  export type RoomAvailabilityWhereInput = {
    AND?: RoomAvailabilityWhereInput | RoomAvailabilityWhereInput[]
    OR?: RoomAvailabilityWhereInput[]
    NOT?: RoomAvailabilityWhereInput | RoomAvailabilityWhereInput[]
    id?: IntFilter<"RoomAvailability"> | number
    roomId?: IntFilter<"RoomAvailability"> | number
    isAvailable?: BoolFilter<"RoomAvailability"> | boolean
    date?: DateTimeFilter<"RoomAvailability"> | Date | string
    price?: FloatFilter<"RoomAvailability"> | number
    createdAt?: DateTimeFilter<"RoomAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"RoomAvailability"> | Date | string
    room?: XOR<RoomRelationFilter, RoomWhereInput>
  }

  export type RoomAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    isAvailable?: SortOrder
    date?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
  }

  export type RoomAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    roomId_date?: RoomAvailabilityRoomIdDateCompoundUniqueInput
    AND?: RoomAvailabilityWhereInput | RoomAvailabilityWhereInput[]
    OR?: RoomAvailabilityWhereInput[]
    NOT?: RoomAvailabilityWhereInput | RoomAvailabilityWhereInput[]
    roomId?: IntFilter<"RoomAvailability"> | number
    isAvailable?: BoolFilter<"RoomAvailability"> | boolean
    date?: DateTimeFilter<"RoomAvailability"> | Date | string
    price?: FloatFilter<"RoomAvailability"> | number
    createdAt?: DateTimeFilter<"RoomAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"RoomAvailability"> | Date | string
    room?: XOR<RoomRelationFilter, RoomWhereInput>
  }, "id" | "roomId_date">

  export type RoomAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    isAvailable?: SortOrder
    date?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomAvailabilityCountOrderByAggregateInput
    _avg?: RoomAvailabilityAvgOrderByAggregateInput
    _max?: RoomAvailabilityMaxOrderByAggregateInput
    _min?: RoomAvailabilityMinOrderByAggregateInput
    _sum?: RoomAvailabilitySumOrderByAggregateInput
  }

  export type RoomAvailabilityScalarWhereWithAggregatesInput = {
    AND?: RoomAvailabilityScalarWhereWithAggregatesInput | RoomAvailabilityScalarWhereWithAggregatesInput[]
    OR?: RoomAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: RoomAvailabilityScalarWhereWithAggregatesInput | RoomAvailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomAvailability"> | number
    roomId?: IntWithAggregatesFilter<"RoomAvailability"> | number
    isAvailable?: BoolWithAggregatesFilter<"RoomAvailability"> | boolean
    date?: DateTimeWithAggregatesFilter<"RoomAvailability"> | Date | string
    price?: FloatWithAggregatesFilter<"RoomAvailability"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RoomAvailability"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoomAvailability"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    propertyId?: IntFilter<"Booking"> | number
    invoiceNumber?: StringFilter<"Booking"> | string
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    totalPrice?: FloatFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentDeadline?: DateTimeFilter<"Booking"> | Date | string
    paymentProof?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
    bookingRooms?: BookingRoomListRelationFilter
    review?: XOR<ReviewNullableRelationFilter, ReviewWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    invoiceNumber?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentDeadline?: SortOrder
    paymentProof?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
    bookingRooms?: BookingRoomOrderByRelationAggregateInput
    review?: ReviewOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    invoiceNumber?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: IntFilter<"Booking"> | number
    propertyId?: IntFilter<"Booking"> | number
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    totalPrice?: FloatFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentDeadline?: DateTimeFilter<"Booking"> | Date | string
    paymentProof?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
    bookingRooms?: BookingRoomListRelationFilter
    review?: XOR<ReviewNullableRelationFilter, ReviewWhereInput> | null
  }, "id" | "invoiceNumber">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    invoiceNumber?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentDeadline?: SortOrder
    paymentProof?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    userId?: IntWithAggregatesFilter<"Booking"> | number
    propertyId?: IntWithAggregatesFilter<"Booking"> | number
    invoiceNumber?: StringWithAggregatesFilter<"Booking"> | string
    checkIn?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    checkOut?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    totalPrice?: FloatWithAggregatesFilter<"Booking"> | number
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    paymentDeadline?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    paymentProof?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type BookingRoomWhereInput = {
    AND?: BookingRoomWhereInput | BookingRoomWhereInput[]
    OR?: BookingRoomWhereInput[]
    NOT?: BookingRoomWhereInput | BookingRoomWhereInput[]
    id?: IntFilter<"BookingRoom"> | number
    bookingId?: IntFilter<"BookingRoom"> | number
    roomId?: IntFilter<"BookingRoom"> | number
    guestCount?: IntFilter<"BookingRoom"> | number
    pricePerNight?: FloatFilter<"BookingRoom"> | number
    numberOfNights?: IntFilter<"BookingRoom"> | number
    totalPrice?: FloatFilter<"BookingRoom"> | number
    createdAt?: DateTimeFilter<"BookingRoom"> | Date | string
    updatedAt?: DateTimeFilter<"BookingRoom"> | Date | string
    booking?: XOR<BookingRelationFilter, BookingWhereInput>
    room?: XOR<RoomRelationFilter, RoomWhereInput>
  }

  export type BookingRoomOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    roomId?: SortOrder
    guestCount?: SortOrder
    pricePerNight?: SortOrder
    numberOfNights?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
  }

  export type BookingRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingRoomWhereInput | BookingRoomWhereInput[]
    OR?: BookingRoomWhereInput[]
    NOT?: BookingRoomWhereInput | BookingRoomWhereInput[]
    bookingId?: IntFilter<"BookingRoom"> | number
    roomId?: IntFilter<"BookingRoom"> | number
    guestCount?: IntFilter<"BookingRoom"> | number
    pricePerNight?: FloatFilter<"BookingRoom"> | number
    numberOfNights?: IntFilter<"BookingRoom"> | number
    totalPrice?: FloatFilter<"BookingRoom"> | number
    createdAt?: DateTimeFilter<"BookingRoom"> | Date | string
    updatedAt?: DateTimeFilter<"BookingRoom"> | Date | string
    booking?: XOR<BookingRelationFilter, BookingWhereInput>
    room?: XOR<RoomRelationFilter, RoomWhereInput>
  }, "id">

  export type BookingRoomOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    roomId?: SortOrder
    guestCount?: SortOrder
    pricePerNight?: SortOrder
    numberOfNights?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingRoomCountOrderByAggregateInput
    _avg?: BookingRoomAvgOrderByAggregateInput
    _max?: BookingRoomMaxOrderByAggregateInput
    _min?: BookingRoomMinOrderByAggregateInput
    _sum?: BookingRoomSumOrderByAggregateInput
  }

  export type BookingRoomScalarWhereWithAggregatesInput = {
    AND?: BookingRoomScalarWhereWithAggregatesInput | BookingRoomScalarWhereWithAggregatesInput[]
    OR?: BookingRoomScalarWhereWithAggregatesInput[]
    NOT?: BookingRoomScalarWhereWithAggregatesInput | BookingRoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookingRoom"> | number
    bookingId?: IntWithAggregatesFilter<"BookingRoom"> | number
    roomId?: IntWithAggregatesFilter<"BookingRoom"> | number
    guestCount?: IntWithAggregatesFilter<"BookingRoom"> | number
    pricePerNight?: FloatWithAggregatesFilter<"BookingRoom"> | number
    numberOfNights?: IntWithAggregatesFilter<"BookingRoom"> | number
    totalPrice?: FloatWithAggregatesFilter<"BookingRoom"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BookingRoom"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BookingRoom"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    propertyId?: IntFilter<"Review"> | number
    bookingId?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    tenantReply?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
    booking?: XOR<BookingRelationFilter, BookingWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    bookingId?: SortOrder
    comment?: SortOrder
    tenantReply?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bookingId?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    userId?: IntFilter<"Review"> | number
    propertyId?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    tenantReply?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
    booking?: XOR<BookingRelationFilter, BookingWhereInput>
  }, "id" | "bookingId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    bookingId?: SortOrder
    comment?: SortOrder
    tenantReply?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntWithAggregatesFilter<"Review"> | number
    propertyId?: IntWithAggregatesFilter<"Review"> | number
    bookingId?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringWithAggregatesFilter<"Review"> | string
    tenantReply?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: IntFilter<"Token"> | number
    token?: StringFilter<"Token"> | string
    purpose?: EnumTokenPurposeFilter<"Token"> | $Enums.TokenPurpose
    expiresAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
    createdAt?: DateTimeFilter<"Token"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    purpose?: EnumTokenPurposeFilter<"Token"> | $Enums.TokenPurpose
    expiresAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
    createdAt?: DateTimeFilter<"Token"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Token"> | number
    token?: StringWithAggregatesFilter<"Token"> | string
    purpose?: EnumTokenPurposeWithAggregatesFilter<"Token"> | $Enums.TokenPurpose
    expiresAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    userId?: IntWithAggregatesFilter<"Token"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
  }

  export type UserCreateInput = {
    role: $Enums.UserRole
    fullName: string
    email: string
    password?: string | null
    profilePicture?: string | null
    provider?: string | null
    providerId?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant?: TenantCreateNestedOneWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    role: $Enums.UserRole
    fullName: string
    email: string
    password?: string | null
    profilePicture?: string | null
    provider?: string | null
    providerId?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant?: TenantUncheckedCreateNestedOneWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUncheckedUpdateOneWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    role: $Enums.UserRole
    fullName: string
    email: string
    password?: string | null
    profilePicture?: string | null
    provider?: string | null
    providerId?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateInput = {
    companyName: string
    addressCompany: string
    phoneNumberCompany: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTenantInput
    properties?: PropertyCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: number
    userId: number
    companyName: string
    addressCompany: string
    phoneNumberCompany: string
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    addressCompany?: StringFieldUpdateOperationsInput | string
    phoneNumberCompany?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTenantNestedInput
    properties?: PropertyUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    addressCompany?: StringFieldUpdateOperationsInput | string
    phoneNumberCompany?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: number
    userId: number
    companyName: string
    addressCompany: string
    phoneNumberCompany: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    addressCompany?: StringFieldUpdateOperationsInput | string
    phoneNumberCompany?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    addressCompany?: StringFieldUpdateOperationsInput | string
    phoneNumberCompany?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    properties?: PropertyCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    properties?: PropertyUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    properties?: PropertyUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    properties?: PropertyUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyCreateInput = {
    name: string
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    provinsi: string
    zipCode: string
    mainImage?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPropertiesInput
    category: CategoryCreateNestedOneWithoutPropertiesInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    bookings?: BookingCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: number
    tenantId: number
    name: string
    categoryId: number
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    provinsi: string
    zipCode: string
    mainImage?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    bookings?: BookingUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    provinsi?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPropertiesNestedInput
    category?: CategoryUpdateOneRequiredWithoutPropertiesNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    provinsi?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: number
    tenantId: number
    name: string
    categoryId: number
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    provinsi: string
    zipCode: string
    mainImage?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    provinsi?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    provinsi?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateInput = {
    imageUrl: string
    property: PropertyCreateNestedOneWithoutImagesInput
  }

  export type PropertyImageUncheckedCreateInput = {
    id?: number
    propertyId: number
    imageUrl: string
  }

  export type PropertyImageUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    property?: PropertyUpdateOneRequiredWithoutImagesNestedInput
  }

  export type PropertyImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyImageCreateManyInput = {
    id?: number
    propertyId: number
    imageUrl: string
  }

  export type PropertyImageUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type RoomCreateInput = {
    name: string
    category: $Enums.RoomCategory
    description: string
    bedOption: $Enums.BedOption
    imageRoom?: string | null
    capacity: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutRoomsInput
    images?: RoomImageCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityCreateNestedManyWithoutRoomInput
    bookingRooms?: BookingRoomCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    propertyId: number
    name: string
    category: $Enums.RoomCategory
    description: string
    bedOption: $Enums.BedOption
    imageRoom?: string | null
    capacity: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityUncheckedCreateNestedManyWithoutRoomInput
    bookingRooms?: BookingRoomUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumRoomCategoryFieldUpdateOperationsInput | $Enums.RoomCategory
    description?: StringFieldUpdateOperationsInput | string
    bedOption?: EnumBedOptionFieldUpdateOperationsInput | $Enums.BedOption
    imageRoom?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutRoomsNestedInput
    images?: RoomImageUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUpdateManyWithoutRoomNestedInput
    bookingRooms?: BookingRoomUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumRoomCategoryFieldUpdateOperationsInput | $Enums.RoomCategory
    description?: StringFieldUpdateOperationsInput | string
    bedOption?: EnumBedOptionFieldUpdateOperationsInput | $Enums.BedOption
    imageRoom?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
    bookingRooms?: BookingRoomUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: number
    propertyId: number
    name: string
    category: $Enums.RoomCategory
    description: string
    bedOption: $Enums.BedOption
    imageRoom?: string | null
    capacity: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumRoomCategoryFieldUpdateOperationsInput | $Enums.RoomCategory
    description?: StringFieldUpdateOperationsInput | string
    bedOption?: EnumBedOptionFieldUpdateOperationsInput | $Enums.BedOption
    imageRoom?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumRoomCategoryFieldUpdateOperationsInput | $Enums.RoomCategory
    description?: StringFieldUpdateOperationsInput | string
    bedOption?: EnumBedOptionFieldUpdateOperationsInput | $Enums.BedOption
    imageRoom?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomImageCreateInput = {
    imageUrl: string
    room: RoomCreateNestedOneWithoutImagesInput
  }

  export type RoomImageUncheckedCreateInput = {
    id?: number
    roomId: number
    imageUrl: string
  }

  export type RoomImageUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    room?: RoomUpdateOneRequiredWithoutImagesNestedInput
  }

  export type RoomImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type RoomImageCreateManyInput = {
    id?: number
    roomId: number
    imageUrl: string
  }

  export type RoomImageUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type RoomImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type RoomAvailabilityCreateInput = {
    isAvailable?: boolean
    date: Date | string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutAvailabilitiesInput
  }

  export type RoomAvailabilityUncheckedCreateInput = {
    id?: number
    roomId: number
    isAvailable?: boolean
    date: Date | string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomAvailabilityUpdateInput = {
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type RoomAvailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomAvailabilityCreateManyInput = {
    id?: number
    roomId: number
    isAvailable?: boolean
    date: Date | string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomAvailabilityUpdateManyMutationInput = {
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomAvailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    invoiceNumber: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status?: $Enums.BookingStatus
    paymentDeadline: Date | string
    paymentProof?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    property: PropertyCreateNestedOneWithoutBookingsInput
    bookingRooms?: BookingRoomCreateNestedManyWithoutBookingInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    userId: number
    propertyId: number
    invoiceNumber: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status?: $Enums.BookingStatus
    paymentDeadline: Date | string
    paymentProof?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingRooms?: BookingRoomUncheckedCreateNestedManyWithoutBookingInput
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingUpdateInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    property?: PropertyUpdateOneRequiredWithoutBookingsNestedInput
    bookingRooms?: BookingRoomUpdateManyWithoutBookingNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingRooms?: BookingRoomUncheckedUpdateManyWithoutBookingNestedInput
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: number
    userId: number
    propertyId: number
    invoiceNumber: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status?: $Enums.BookingStatus
    paymentDeadline: Date | string
    paymentProof?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingRoomCreateInput = {
    guestCount: number
    pricePerNight: number
    numberOfNights: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    booking: BookingCreateNestedOneWithoutBookingRoomsInput
    room: RoomCreateNestedOneWithoutBookingRoomsInput
  }

  export type BookingRoomUncheckedCreateInput = {
    id?: number
    bookingId: number
    roomId: number
    guestCount: number
    pricePerNight: number
    numberOfNights: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingRoomUpdateInput = {
    guestCount?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    numberOfNights?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutBookingRoomsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingRoomsNestedInput
  }

  export type BookingRoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    numberOfNights?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingRoomCreateManyInput = {
    id?: number
    bookingId: number
    roomId: number
    guestCount: number
    pricePerNight: number
    numberOfNights: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingRoomUpdateManyMutationInput = {
    guestCount?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    numberOfNights?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingRoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    numberOfNights?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    comment: string
    tenantReply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    property: PropertyCreateNestedOneWithoutReviewsInput
    booking: BookingCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    userId: number
    propertyId: number
    bookingId: number
    comment: string
    tenantReply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    property?: PropertyUpdateOneRequiredWithoutReviewsNestedInput
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    userId: number
    propertyId: number
    bookingId: number
    comment: string
    tenantReply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    token: string
    purpose: $Enums.TokenPurpose
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateInput = {
    id?: number
    token: string
    purpose: $Enums.TokenPurpose
    expiresAt: Date | string
    userId: number
    createdAt?: Date | string
  }

  export type TokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    purpose?: EnumTokenPurposeFieldUpdateOperationsInput | $Enums.TokenPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    purpose?: EnumTokenPurposeFieldUpdateOperationsInput | $Enums.TokenPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyInput = {
    id?: number
    token: string
    purpose: $Enums.TokenPurpose
    expiresAt: Date | string
    userId: number
    createdAt?: Date | string
  }

  export type TokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    purpose?: EnumTokenPurposeFieldUpdateOperationsInput | $Enums.TokenPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    purpose?: EnumTokenPurposeFieldUpdateOperationsInput | $Enums.TokenPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TenantNullableRelationFilter = {
    is?: TenantWhereInput | null
    isNot?: TenantWhereInput | null
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProviderProviderIdCompoundUniqueInput = {
    provider: string
    providerId: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    addressCompany?: SortOrder
    phoneNumberCompany?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    addressCompany?: SortOrder
    phoneNumberCompany?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    addressCompany?: SortOrder
    phoneNumberCompany?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TenantRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type PropertyImageListRelationFilter = {
    every?: PropertyImageWhereInput
    some?: PropertyImageWhereInput
    none?: PropertyImageWhereInput
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type PropertyImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    description?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    provinsi?: SortOrder
    zipCode?: SortOrder
    mainImage?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    description?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    provinsi?: SortOrder
    zipCode?: SortOrder
    mainImage?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    description?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    provinsi?: SortOrder
    zipCode?: SortOrder
    mainImage?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PropertyRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type PropertyImageCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    imageUrl?: SortOrder
  }

  export type PropertyImageAvgOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type PropertyImageMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    imageUrl?: SortOrder
  }

  export type PropertyImageMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    imageUrl?: SortOrder
  }

  export type PropertyImageSumOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type EnumRoomCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomCategory | EnumRoomCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.RoomCategory[] | ListEnumRoomCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomCategory[] | ListEnumRoomCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomCategoryFilter<$PrismaModel> | $Enums.RoomCategory
  }

  export type EnumBedOptionFilter<$PrismaModel = never> = {
    equals?: $Enums.BedOption | EnumBedOptionFieldRefInput<$PrismaModel>
    in?: $Enums.BedOption[] | ListEnumBedOptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.BedOption[] | ListEnumBedOptionFieldRefInput<$PrismaModel>
    not?: NestedEnumBedOptionFilter<$PrismaModel> | $Enums.BedOption
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RoomImageListRelationFilter = {
    every?: RoomImageWhereInput
    some?: RoomImageWhereInput
    none?: RoomImageWhereInput
  }

  export type RoomAvailabilityListRelationFilter = {
    every?: RoomAvailabilityWhereInput
    some?: RoomAvailabilityWhereInput
    none?: RoomAvailabilityWhereInput
  }

  export type BookingRoomListRelationFilter = {
    every?: BookingRoomWhereInput
    some?: BookingRoomWhereInput
    none?: BookingRoomWhereInput
  }

  export type RoomImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    bedOption?: SortOrder
    imageRoom?: SortOrder
    capacity?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    capacity?: SortOrder
    basePrice?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    bedOption?: SortOrder
    imageRoom?: SortOrder
    capacity?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    bedOption?: SortOrder
    imageRoom?: SortOrder
    capacity?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    capacity?: SortOrder
    basePrice?: SortOrder
  }

  export type EnumRoomCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomCategory | EnumRoomCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.RoomCategory[] | ListEnumRoomCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomCategory[] | ListEnumRoomCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomCategoryWithAggregatesFilter<$PrismaModel> | $Enums.RoomCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomCategoryFilter<$PrismaModel>
    _max?: NestedEnumRoomCategoryFilter<$PrismaModel>
  }

  export type EnumBedOptionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BedOption | EnumBedOptionFieldRefInput<$PrismaModel>
    in?: $Enums.BedOption[] | ListEnumBedOptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.BedOption[] | ListEnumBedOptionFieldRefInput<$PrismaModel>
    not?: NestedEnumBedOptionWithAggregatesFilter<$PrismaModel> | $Enums.BedOption
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBedOptionFilter<$PrismaModel>
    _max?: NestedEnumBedOptionFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RoomRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RoomImageCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    imageUrl?: SortOrder
  }

  export type RoomImageAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type RoomImageMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    imageUrl?: SortOrder
  }

  export type RoomImageMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    imageUrl?: SortOrder
  }

  export type RoomImageSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type RoomAvailabilityRoomIdDateCompoundUniqueInput = {
    roomId: number
    date: Date | string
  }

  export type RoomAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    isAvailable?: SortOrder
    date?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    price?: SortOrder
  }

  export type RoomAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    isAvailable?: SortOrder
    date?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    isAvailable?: SortOrder
    date?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    price?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type ReviewNullableRelationFilter = {
    is?: ReviewWhereInput | null
    isNot?: ReviewWhereInput | null
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    invoiceNumber?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentDeadline?: SortOrder
    paymentProof?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    totalPrice?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    invoiceNumber?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentDeadline?: SortOrder
    paymentProof?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    invoiceNumber?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentDeadline?: SortOrder
    paymentProof?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    totalPrice?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type BookingRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type BookingRoomCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    roomId?: SortOrder
    guestCount?: SortOrder
    pricePerNight?: SortOrder
    numberOfNights?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingRoomAvgOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    roomId?: SortOrder
    guestCount?: SortOrder
    pricePerNight?: SortOrder
    numberOfNights?: SortOrder
    totalPrice?: SortOrder
  }

  export type BookingRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    roomId?: SortOrder
    guestCount?: SortOrder
    pricePerNight?: SortOrder
    numberOfNights?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingRoomMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    roomId?: SortOrder
    guestCount?: SortOrder
    pricePerNight?: SortOrder
    numberOfNights?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingRoomSumOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    roomId?: SortOrder
    guestCount?: SortOrder
    pricePerNight?: SortOrder
    numberOfNights?: SortOrder
    totalPrice?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    bookingId?: SortOrder
    comment?: SortOrder
    tenantReply?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    bookingId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    bookingId?: SortOrder
    comment?: SortOrder
    tenantReply?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    bookingId?: SortOrder
    comment?: SortOrder
    tenantReply?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    bookingId?: SortOrder
  }

  export type EnumTokenPurposeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenPurpose | EnumTokenPurposeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenPurpose[] | ListEnumTokenPurposeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenPurpose[] | ListEnumTokenPurposeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenPurposeFilter<$PrismaModel> | $Enums.TokenPurpose
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumTokenPurposeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenPurpose | EnumTokenPurposeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenPurpose[] | ListEnumTokenPurposeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenPurpose[] | ListEnumTokenPurposeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenPurposeWithAggregatesFilter<$PrismaModel> | $Enums.TokenPurpose
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenPurposeFilter<$PrismaModel>
    _max?: NestedEnumTokenPurposeFilter<$PrismaModel>
  }

  export type TenantCreateNestedOneWithoutUserInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput
    connect?: TenantWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type TenantUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput
    connect?: TenantWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TenantUpdateOneWithoutUserNestedInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput
    upsert?: TenantUpsertWithoutUserInput
    disconnect?: TenantWhereInput | boolean
    delete?: TenantWhereInput | boolean
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUserInput, TenantUpdateWithoutUserInput>, TenantUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TenantUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput
    upsert?: TenantUpsertWithoutUserInput
    disconnect?: TenantWhereInput | boolean
    delete?: TenantWhereInput | boolean
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUserInput, TenantUpdateWithoutUserInput>, TenantUncheckedUpdateWithoutUserInput>
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyCreateNestedManyWithoutTenantInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput
    upsert?: UserUpsertWithoutTenantInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTenantInput, UserUpdateWithoutTenantInput>, UserUncheckedUpdateWithoutTenantInput>
  }

  export type PropertyUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutTenantInput | PropertyUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutTenantInput | PropertyUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutTenantInput | PropertyUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutTenantInput | PropertyUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutTenantInput | PropertyUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutTenantInput | PropertyUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutCategoryInput | PropertyUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutCategoryInput | PropertyUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutCategoryInput | PropertyUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutCategoryInput | PropertyUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutCategoryInput | PropertyUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutCategoryInput | PropertyUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<TenantCreateWithoutPropertiesInput, TenantUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPropertiesInput
    connect?: TenantWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<CategoryCreateWithoutPropertiesInput, CategoryUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPropertiesInput
    connect?: CategoryWhereUniqueInput
  }

  export type PropertyImageCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutPropertyInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutPropertyInput = {
    create?: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput> | BookingCreateWithoutPropertyInput[] | BookingUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPropertyInput | BookingCreateOrConnectWithoutPropertyInput[]
    createMany?: BookingCreateManyPropertyInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PropertyImageUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput> | BookingCreateWithoutPropertyInput[] | BookingUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPropertyInput | BookingCreateOrConnectWithoutPropertyInput[]
    createMany?: BookingCreateManyPropertyInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TenantUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<TenantCreateWithoutPropertiesInput, TenantUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPropertiesInput
    upsert?: TenantUpsertWithoutPropertiesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutPropertiesInput, TenantUpdateWithoutPropertiesInput>, TenantUncheckedUpdateWithoutPropertiesInput>
  }

  export type CategoryUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<CategoryCreateWithoutPropertiesInput, CategoryUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPropertiesInput
    upsert?: CategoryUpsertWithoutPropertiesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPropertiesInput, CategoryUpdateWithoutPropertiesInput>, CategoryUncheckedUpdateWithoutPropertiesInput>
  }

  export type PropertyImageUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutPropertyInput | PropertyImageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutPropertyInput | RoomUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutPropertyInput | RoomUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutPropertyInput | RoomUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput> | BookingCreateWithoutPropertyInput[] | BookingUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPropertyInput | BookingCreateOrConnectWithoutPropertyInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutPropertyInput | BookingUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: BookingCreateManyPropertyInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutPropertyInput | BookingUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutPropertyInput | BookingUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPropertyInput | ReviewUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPropertyInput | ReviewUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPropertyInput | ReviewUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutPropertyInput | PropertyImageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutPropertyInput | RoomUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutPropertyInput | RoomUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutPropertyInput | RoomUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput> | BookingCreateWithoutPropertyInput[] | BookingUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPropertyInput | BookingCreateOrConnectWithoutPropertyInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutPropertyInput | BookingUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: BookingCreateManyPropertyInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutPropertyInput | BookingUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutPropertyInput | BookingUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPropertyInput | ReviewUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPropertyInput | ReviewUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPropertyInput | ReviewUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutImagesInput = {
    create?: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutImagesInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutImagesInput
    upsert?: PropertyUpsertWithoutImagesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutImagesInput, PropertyUpdateWithoutImagesInput>, PropertyUncheckedUpdateWithoutImagesInput>
  }

  export type PropertyCreateNestedOneWithoutRoomsInput = {
    create?: XOR<PropertyCreateWithoutRoomsInput, PropertyUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutRoomsInput
    connect?: PropertyWhereUniqueInput
  }

  export type RoomImageCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput> | RoomImageCreateWithoutRoomInput[] | RoomImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomImageCreateOrConnectWithoutRoomInput | RoomImageCreateOrConnectWithoutRoomInput[]
    createMany?: RoomImageCreateManyRoomInputEnvelope
    connect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
  }

  export type RoomAvailabilityCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomAvailabilityCreateWithoutRoomInput, RoomAvailabilityUncheckedCreateWithoutRoomInput> | RoomAvailabilityCreateWithoutRoomInput[] | RoomAvailabilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAvailabilityCreateOrConnectWithoutRoomInput | RoomAvailabilityCreateOrConnectWithoutRoomInput[]
    createMany?: RoomAvailabilityCreateManyRoomInputEnvelope
    connect?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
  }

  export type BookingRoomCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingRoomCreateWithoutRoomInput, BookingRoomUncheckedCreateWithoutRoomInput> | BookingRoomCreateWithoutRoomInput[] | BookingRoomUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutRoomInput | BookingRoomCreateOrConnectWithoutRoomInput[]
    createMany?: BookingRoomCreateManyRoomInputEnvelope
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
  }

  export type RoomImageUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput> | RoomImageCreateWithoutRoomInput[] | RoomImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomImageCreateOrConnectWithoutRoomInput | RoomImageCreateOrConnectWithoutRoomInput[]
    createMany?: RoomImageCreateManyRoomInputEnvelope
    connect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
  }

  export type RoomAvailabilityUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomAvailabilityCreateWithoutRoomInput, RoomAvailabilityUncheckedCreateWithoutRoomInput> | RoomAvailabilityCreateWithoutRoomInput[] | RoomAvailabilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAvailabilityCreateOrConnectWithoutRoomInput | RoomAvailabilityCreateOrConnectWithoutRoomInput[]
    createMany?: RoomAvailabilityCreateManyRoomInputEnvelope
    connect?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
  }

  export type BookingRoomUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingRoomCreateWithoutRoomInput, BookingRoomUncheckedCreateWithoutRoomInput> | BookingRoomCreateWithoutRoomInput[] | BookingRoomUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutRoomInput | BookingRoomCreateOrConnectWithoutRoomInput[]
    createMany?: BookingRoomCreateManyRoomInputEnvelope
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
  }

  export type EnumRoomCategoryFieldUpdateOperationsInput = {
    set?: $Enums.RoomCategory
  }

  export type EnumBedOptionFieldUpdateOperationsInput = {
    set?: $Enums.BedOption
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<PropertyCreateWithoutRoomsInput, PropertyUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutRoomsInput
    upsert?: PropertyUpsertWithoutRoomsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutRoomsInput, PropertyUpdateWithoutRoomsInput>, PropertyUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomImageUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput> | RoomImageCreateWithoutRoomInput[] | RoomImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomImageCreateOrConnectWithoutRoomInput | RoomImageCreateOrConnectWithoutRoomInput[]
    upsert?: RoomImageUpsertWithWhereUniqueWithoutRoomInput | RoomImageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomImageCreateManyRoomInputEnvelope
    set?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    disconnect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    delete?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    connect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    update?: RoomImageUpdateWithWhereUniqueWithoutRoomInput | RoomImageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomImageUpdateManyWithWhereWithoutRoomInput | RoomImageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomImageScalarWhereInput | RoomImageScalarWhereInput[]
  }

  export type RoomAvailabilityUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomAvailabilityCreateWithoutRoomInput, RoomAvailabilityUncheckedCreateWithoutRoomInput> | RoomAvailabilityCreateWithoutRoomInput[] | RoomAvailabilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAvailabilityCreateOrConnectWithoutRoomInput | RoomAvailabilityCreateOrConnectWithoutRoomInput[]
    upsert?: RoomAvailabilityUpsertWithWhereUniqueWithoutRoomInput | RoomAvailabilityUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomAvailabilityCreateManyRoomInputEnvelope
    set?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    disconnect?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    delete?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    connect?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    update?: RoomAvailabilityUpdateWithWhereUniqueWithoutRoomInput | RoomAvailabilityUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomAvailabilityUpdateManyWithWhereWithoutRoomInput | RoomAvailabilityUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomAvailabilityScalarWhereInput | RoomAvailabilityScalarWhereInput[]
  }

  export type BookingRoomUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BookingRoomCreateWithoutRoomInput, BookingRoomUncheckedCreateWithoutRoomInput> | BookingRoomCreateWithoutRoomInput[] | BookingRoomUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutRoomInput | BookingRoomCreateOrConnectWithoutRoomInput[]
    upsert?: BookingRoomUpsertWithWhereUniqueWithoutRoomInput | BookingRoomUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BookingRoomCreateManyRoomInputEnvelope
    set?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    disconnect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    delete?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    update?: BookingRoomUpdateWithWhereUniqueWithoutRoomInput | BookingRoomUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BookingRoomUpdateManyWithWhereWithoutRoomInput | BookingRoomUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BookingRoomScalarWhereInput | BookingRoomScalarWhereInput[]
  }

  export type RoomImageUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput> | RoomImageCreateWithoutRoomInput[] | RoomImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomImageCreateOrConnectWithoutRoomInput | RoomImageCreateOrConnectWithoutRoomInput[]
    upsert?: RoomImageUpsertWithWhereUniqueWithoutRoomInput | RoomImageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomImageCreateManyRoomInputEnvelope
    set?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    disconnect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    delete?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    connect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    update?: RoomImageUpdateWithWhereUniqueWithoutRoomInput | RoomImageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomImageUpdateManyWithWhereWithoutRoomInput | RoomImageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomImageScalarWhereInput | RoomImageScalarWhereInput[]
  }

  export type RoomAvailabilityUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomAvailabilityCreateWithoutRoomInput, RoomAvailabilityUncheckedCreateWithoutRoomInput> | RoomAvailabilityCreateWithoutRoomInput[] | RoomAvailabilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAvailabilityCreateOrConnectWithoutRoomInput | RoomAvailabilityCreateOrConnectWithoutRoomInput[]
    upsert?: RoomAvailabilityUpsertWithWhereUniqueWithoutRoomInput | RoomAvailabilityUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomAvailabilityCreateManyRoomInputEnvelope
    set?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    disconnect?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    delete?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    connect?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    update?: RoomAvailabilityUpdateWithWhereUniqueWithoutRoomInput | RoomAvailabilityUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomAvailabilityUpdateManyWithWhereWithoutRoomInput | RoomAvailabilityUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomAvailabilityScalarWhereInput | RoomAvailabilityScalarWhereInput[]
  }

  export type BookingRoomUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BookingRoomCreateWithoutRoomInput, BookingRoomUncheckedCreateWithoutRoomInput> | BookingRoomCreateWithoutRoomInput[] | BookingRoomUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutRoomInput | BookingRoomCreateOrConnectWithoutRoomInput[]
    upsert?: BookingRoomUpsertWithWhereUniqueWithoutRoomInput | BookingRoomUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BookingRoomCreateManyRoomInputEnvelope
    set?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    disconnect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    delete?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    update?: BookingRoomUpdateWithWhereUniqueWithoutRoomInput | BookingRoomUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BookingRoomUpdateManyWithWhereWithoutRoomInput | BookingRoomUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BookingRoomScalarWhereInput | BookingRoomScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutImagesInput = {
    create?: XOR<RoomCreateWithoutImagesInput, RoomUncheckedCreateWithoutImagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutImagesInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<RoomCreateWithoutImagesInput, RoomUncheckedCreateWithoutImagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutImagesInput
    upsert?: RoomUpsertWithoutImagesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutImagesInput, RoomUpdateWithoutImagesInput>, RoomUncheckedUpdateWithoutImagesInput>
  }

  export type RoomCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<RoomCreateWithoutAvailabilitiesInput, RoomUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutAvailabilitiesInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<RoomCreateWithoutAvailabilitiesInput, RoomUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutAvailabilitiesInput
    upsert?: RoomUpsertWithoutAvailabilitiesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutAvailabilitiesInput, RoomUpdateWithoutAvailabilitiesInput>, RoomUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutBookingsInput = {
    create?: XOR<PropertyCreateWithoutBookingsInput, PropertyUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutBookingsInput
    connect?: PropertyWhereUniqueInput
  }

  export type BookingRoomCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingRoomCreateWithoutBookingInput, BookingRoomUncheckedCreateWithoutBookingInput> | BookingRoomCreateWithoutBookingInput[] | BookingRoomUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutBookingInput | BookingRoomCreateOrConnectWithoutBookingInput[]
    createMany?: BookingRoomCreateManyBookingInputEnvelope
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
  }

  export type ReviewCreateNestedOneWithoutBookingInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    connect?: ReviewWhereUniqueInput
  }

  export type BookingRoomUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingRoomCreateWithoutBookingInput, BookingRoomUncheckedCreateWithoutBookingInput> | BookingRoomCreateWithoutBookingInput[] | BookingRoomUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutBookingInput | BookingRoomCreateOrConnectWithoutBookingInput[]
    createMany?: BookingRoomCreateManyBookingInputEnvelope
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    connect?: ReviewWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type PropertyUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<PropertyCreateWithoutBookingsInput, PropertyUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutBookingsInput
    upsert?: PropertyUpsertWithoutBookingsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutBookingsInput, PropertyUpdateWithoutBookingsInput>, PropertyUncheckedUpdateWithoutBookingsInput>
  }

  export type BookingRoomUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingRoomCreateWithoutBookingInput, BookingRoomUncheckedCreateWithoutBookingInput> | BookingRoomCreateWithoutBookingInput[] | BookingRoomUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutBookingInput | BookingRoomCreateOrConnectWithoutBookingInput[]
    upsert?: BookingRoomUpsertWithWhereUniqueWithoutBookingInput | BookingRoomUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingRoomCreateManyBookingInputEnvelope
    set?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    disconnect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    delete?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    update?: BookingRoomUpdateWithWhereUniqueWithoutBookingInput | BookingRoomUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingRoomUpdateManyWithWhereWithoutBookingInput | BookingRoomUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingRoomScalarWhereInput | BookingRoomScalarWhereInput[]
  }

  export type ReviewUpdateOneWithoutBookingNestedInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    upsert?: ReviewUpsertWithoutBookingInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutBookingInput, ReviewUpdateWithoutBookingInput>, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type BookingRoomUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingRoomCreateWithoutBookingInput, BookingRoomUncheckedCreateWithoutBookingInput> | BookingRoomCreateWithoutBookingInput[] | BookingRoomUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutBookingInput | BookingRoomCreateOrConnectWithoutBookingInput[]
    upsert?: BookingRoomUpsertWithWhereUniqueWithoutBookingInput | BookingRoomUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingRoomCreateManyBookingInputEnvelope
    set?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    disconnect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    delete?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    update?: BookingRoomUpdateWithWhereUniqueWithoutBookingInput | BookingRoomUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingRoomUpdateManyWithWhereWithoutBookingInput | BookingRoomUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingRoomScalarWhereInput | BookingRoomScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    upsert?: ReviewUpsertWithoutBookingInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutBookingInput, ReviewUpdateWithoutBookingInput>, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type BookingCreateNestedOneWithoutBookingRoomsInput = {
    create?: XOR<BookingCreateWithoutBookingRoomsInput, BookingUncheckedCreateWithoutBookingRoomsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutBookingRoomsInput
    connect?: BookingWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutBookingRoomsInput = {
    create?: XOR<RoomCreateWithoutBookingRoomsInput, RoomUncheckedCreateWithoutBookingRoomsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingRoomsInput
    connect?: RoomWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutBookingRoomsNestedInput = {
    create?: XOR<BookingCreateWithoutBookingRoomsInput, BookingUncheckedCreateWithoutBookingRoomsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutBookingRoomsInput
    upsert?: BookingUpsertWithoutBookingRoomsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutBookingRoomsInput, BookingUpdateWithoutBookingRoomsInput>, BookingUncheckedUpdateWithoutBookingRoomsInput>
  }

  export type RoomUpdateOneRequiredWithoutBookingRoomsNestedInput = {
    create?: XOR<RoomCreateWithoutBookingRoomsInput, RoomUncheckedCreateWithoutBookingRoomsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingRoomsInput
    upsert?: RoomUpsertWithoutBookingRoomsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutBookingRoomsInput, RoomUpdateWithoutBookingRoomsInput>, RoomUncheckedUpdateWithoutBookingRoomsInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutReviewsInput = {
    create?: XOR<PropertyCreateWithoutReviewsInput, PropertyUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutReviewsInput
    connect?: PropertyWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutReviewInput = {
    create?: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewInput
    connect?: BookingWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type PropertyUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<PropertyCreateWithoutReviewsInput, PropertyUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutReviewsInput
    upsert?: PropertyUpsertWithoutReviewsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutReviewsInput, PropertyUpdateWithoutReviewsInput>, PropertyUncheckedUpdateWithoutReviewsInput>
  }

  export type BookingUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewInput
    upsert?: BookingUpsertWithoutReviewInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutReviewInput, BookingUpdateWithoutReviewInput>, BookingUncheckedUpdateWithoutReviewInput>
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTokenPurposeFieldUpdateOperationsInput = {
    set?: $Enums.TokenPurpose
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoomCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomCategory | EnumRoomCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.RoomCategory[] | ListEnumRoomCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomCategory[] | ListEnumRoomCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomCategoryFilter<$PrismaModel> | $Enums.RoomCategory
  }

  export type NestedEnumBedOptionFilter<$PrismaModel = never> = {
    equals?: $Enums.BedOption | EnumBedOptionFieldRefInput<$PrismaModel>
    in?: $Enums.BedOption[] | ListEnumBedOptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.BedOption[] | ListEnumBedOptionFieldRefInput<$PrismaModel>
    not?: NestedEnumBedOptionFilter<$PrismaModel> | $Enums.BedOption
  }

  export type NestedEnumRoomCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomCategory | EnumRoomCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.RoomCategory[] | ListEnumRoomCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomCategory[] | ListEnumRoomCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomCategoryWithAggregatesFilter<$PrismaModel> | $Enums.RoomCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomCategoryFilter<$PrismaModel>
    _max?: NestedEnumRoomCategoryFilter<$PrismaModel>
  }

  export type NestedEnumBedOptionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BedOption | EnumBedOptionFieldRefInput<$PrismaModel>
    in?: $Enums.BedOption[] | ListEnumBedOptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.BedOption[] | ListEnumBedOptionFieldRefInput<$PrismaModel>
    not?: NestedEnumBedOptionWithAggregatesFilter<$PrismaModel> | $Enums.BedOption
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBedOptionFilter<$PrismaModel>
    _max?: NestedEnumBedOptionFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumTokenPurposeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenPurpose | EnumTokenPurposeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenPurpose[] | ListEnumTokenPurposeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenPurpose[] | ListEnumTokenPurposeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenPurposeFilter<$PrismaModel> | $Enums.TokenPurpose
  }

  export type NestedEnumTokenPurposeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenPurpose | EnumTokenPurposeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenPurpose[] | ListEnumTokenPurposeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenPurpose[] | ListEnumTokenPurposeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenPurposeWithAggregatesFilter<$PrismaModel> | $Enums.TokenPurpose
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenPurposeFilter<$PrismaModel>
    _max?: NestedEnumTokenPurposeFilter<$PrismaModel>
  }

  export type TenantCreateWithoutUserInput = {
    companyName: string
    addressCompany: string
    phoneNumberCompany: string
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUserInput = {
    id?: number
    companyName: string
    addressCompany: string
    phoneNumberCompany: string
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUserInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateWithoutUserInput = {
    invoiceNumber: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status?: $Enums.BookingStatus
    paymentDeadline: Date | string
    paymentProof?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutBookingsInput
    bookingRooms?: BookingRoomCreateNestedManyWithoutBookingInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: number
    propertyId: number
    invoiceNumber: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status?: $Enums.BookingStatus
    paymentDeadline: Date | string
    paymentProof?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingRooms?: BookingRoomUncheckedCreateNestedManyWithoutBookingInput
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    comment: string
    tenantReply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutReviewsInput
    booking: BookingCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    propertyId: number
    bookingId: number
    comment: string
    tenantReply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokenCreateWithoutUserInput = {
    token: string
    purpose: $Enums.TokenPurpose
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    purpose: $Enums.TokenPurpose
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutUserInput = {
    update: XOR<TenantUpdateWithoutUserInput, TenantUncheckedUpdateWithoutUserInput>
    create: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUserInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutUserInput, TenantUncheckedUpdateWithoutUserInput>
  }

  export type TenantUpdateWithoutUserInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    addressCompany?: StringFieldUpdateOperationsInput | string
    phoneNumberCompany?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    addressCompany?: StringFieldUpdateOperationsInput | string
    phoneNumberCompany?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    propertyId?: IntFilter<"Booking"> | number
    invoiceNumber?: StringFilter<"Booking"> | string
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    totalPrice?: FloatFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentDeadline?: DateTimeFilter<"Booking"> | Date | string
    paymentProof?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    propertyId?: IntFilter<"Review"> | number
    bookingId?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    tenantReply?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: IntFilter<"Token"> | number
    token?: StringFilter<"Token"> | string
    purpose?: EnumTokenPurposeFilter<"Token"> | $Enums.TokenPurpose
    expiresAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
    createdAt?: DateTimeFilter<"Token"> | Date | string
  }

  export type UserCreateWithoutTenantInput = {
    role: $Enums.UserRole
    fullName: string
    email: string
    password?: string | null
    profilePicture?: string | null
    provider?: string | null
    providerId?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTenantInput = {
    id?: number
    role: $Enums.UserRole
    fullName: string
    email: string
    password?: string | null
    profilePicture?: string | null
    provider?: string | null
    providerId?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type PropertyCreateWithoutTenantInput = {
    name: string
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    provinsi: string
    zipCode: string
    mainImage?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutPropertiesInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    bookings?: BookingCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutTenantInput = {
    id?: number
    name: string
    categoryId: number
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    provinsi: string
    zipCode: string
    mainImage?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    bookings?: BookingUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutTenantInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput>
  }

  export type PropertyCreateManyTenantInputEnvelope = {
    data: PropertyCreateManyTenantInput | PropertyCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTenantInput = {
    update: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTenantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
  }

  export type UserUpdateWithoutTenantInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertyUpsertWithWhereUniqueWithoutTenantInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutTenantInput, PropertyUncheckedUpdateWithoutTenantInput>
    create: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutTenantInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutTenantInput, PropertyUncheckedUpdateWithoutTenantInput>
  }

  export type PropertyUpdateManyWithWhereWithoutTenantInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutTenantInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: IntFilter<"Property"> | number
    tenantId?: IntFilter<"Property"> | number
    name?: StringFilter<"Property"> | string
    categoryId?: IntFilter<"Property"> | number
    description?: StringFilter<"Property"> | string
    location?: StringFilter<"Property"> | string
    latitude?: FloatNullableFilter<"Property"> | number | null
    longitude?: FloatNullableFilter<"Property"> | number | null
    provinsi?: StringFilter<"Property"> | string
    zipCode?: StringFilter<"Property"> | string
    mainImage?: StringNullableFilter<"Property"> | string | null
    deletedAt?: DateTimeNullableFilter<"Property"> | Date | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
  }

  export type PropertyCreateWithoutCategoryInput = {
    name: string
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    provinsi: string
    zipCode: string
    mainImage?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPropertiesInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    bookings?: BookingCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutCategoryInput = {
    id?: number
    tenantId: number
    name: string
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    provinsi: string
    zipCode: string
    mainImage?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    bookings?: BookingUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutCategoryInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput>
  }

  export type PropertyCreateManyCategoryInputEnvelope = {
    data: PropertyCreateManyCategoryInput | PropertyCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutCategoryInput, PropertyUncheckedUpdateWithoutCategoryInput>
    create: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutCategoryInput, PropertyUncheckedUpdateWithoutCategoryInput>
  }

  export type PropertyUpdateManyWithWhereWithoutCategoryInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TenantCreateWithoutPropertiesInput = {
    companyName: string
    addressCompany: string
    phoneNumberCompany: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutPropertiesInput = {
    id?: number
    userId: number
    companyName: string
    addressCompany: string
    phoneNumberCompany: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantCreateOrConnectWithoutPropertiesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPropertiesInput, TenantUncheckedCreateWithoutPropertiesInput>
  }

  export type CategoryCreateWithoutPropertiesInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutPropertiesInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutPropertiesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPropertiesInput, CategoryUncheckedCreateWithoutPropertiesInput>
  }

  export type PropertyImageCreateWithoutPropertyInput = {
    imageUrl: string
  }

  export type PropertyImageUncheckedCreateWithoutPropertyInput = {
    id?: number
    imageUrl: string
  }

  export type PropertyImageCreateOrConnectWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    create: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImageCreateManyPropertyInputEnvelope = {
    data: PropertyImageCreateManyPropertyInput | PropertyImageCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutPropertyInput = {
    name: string
    category: $Enums.RoomCategory
    description: string
    bedOption: $Enums.BedOption
    imageRoom?: string | null
    capacity: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: RoomImageCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityCreateNestedManyWithoutRoomInput
    bookingRooms?: BookingRoomCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutPropertyInput = {
    id?: number
    name: string
    category: $Enums.RoomCategory
    description: string
    bedOption: $Enums.BedOption
    imageRoom?: string | null
    capacity: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityUncheckedCreateNestedManyWithoutRoomInput
    bookingRooms?: BookingRoomUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutPropertyInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput>
  }

  export type RoomCreateManyPropertyInputEnvelope = {
    data: RoomCreateManyPropertyInput | RoomCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutPropertyInput = {
    invoiceNumber: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status?: $Enums.BookingStatus
    paymentDeadline: Date | string
    paymentProof?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    bookingRooms?: BookingRoomCreateNestedManyWithoutBookingInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPropertyInput = {
    id?: number
    userId: number
    invoiceNumber: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status?: $Enums.BookingStatus
    paymentDeadline: Date | string
    paymentProof?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingRooms?: BookingRoomUncheckedCreateNestedManyWithoutBookingInput
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutPropertyInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput>
  }

  export type BookingCreateManyPropertyInputEnvelope = {
    data: BookingCreateManyPropertyInput | BookingCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutPropertyInput = {
    comment: string
    tenantReply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    booking: BookingCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutPropertyInput = {
    id?: number
    userId: number
    bookingId: number
    comment: string
    tenantReply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutPropertyInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput>
  }

  export type ReviewCreateManyPropertyInputEnvelope = {
    data: ReviewCreateManyPropertyInput | ReviewCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutPropertiesInput = {
    update: XOR<TenantUpdateWithoutPropertiesInput, TenantUncheckedUpdateWithoutPropertiesInput>
    create: XOR<TenantCreateWithoutPropertiesInput, TenantUncheckedCreateWithoutPropertiesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutPropertiesInput, TenantUncheckedUpdateWithoutPropertiesInput>
  }

  export type TenantUpdateWithoutPropertiesInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    addressCompany?: StringFieldUpdateOperationsInput | string
    phoneNumberCompany?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    addressCompany?: StringFieldUpdateOperationsInput | string
    phoneNumberCompany?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpsertWithoutPropertiesInput = {
    update: XOR<CategoryUpdateWithoutPropertiesInput, CategoryUncheckedUpdateWithoutPropertiesInput>
    create: XOR<CategoryCreateWithoutPropertiesInput, CategoryUncheckedCreateWithoutPropertiesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPropertiesInput, CategoryUncheckedUpdateWithoutPropertiesInput>
  }

  export type CategoryUpdateWithoutPropertiesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyImageUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    update: XOR<PropertyImageUpdateWithoutPropertyInput, PropertyImageUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImageUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    data: XOR<PropertyImageUpdateWithoutPropertyInput, PropertyImageUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyImageUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyImageScalarWhereInput
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyImageScalarWhereInput = {
    AND?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    OR?: PropertyImageScalarWhereInput[]
    NOT?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    id?: IntFilter<"PropertyImage"> | number
    propertyId?: IntFilter<"PropertyImage"> | number
    imageUrl?: StringFilter<"PropertyImage"> | string
  }

  export type RoomUpsertWithWhereUniqueWithoutPropertyInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutPropertyInput, RoomUncheckedUpdateWithoutPropertyInput>
    create: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutPropertyInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutPropertyInput, RoomUncheckedUpdateWithoutPropertyInput>
  }

  export type RoomUpdateManyWithWhereWithoutPropertyInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutPropertyInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: IntFilter<"Room"> | number
    propertyId?: IntFilter<"Room"> | number
    name?: StringFilter<"Room"> | string
    category?: EnumRoomCategoryFilter<"Room"> | $Enums.RoomCategory
    description?: StringFilter<"Room"> | string
    bedOption?: EnumBedOptionFilter<"Room"> | $Enums.BedOption
    imageRoom?: StringNullableFilter<"Room"> | string | null
    capacity?: IntFilter<"Room"> | number
    basePrice?: FloatFilter<"Room"> | number
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutPropertyInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutPropertyInput, BookingUncheckedUpdateWithoutPropertyInput>
    create: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutPropertyInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutPropertyInput, BookingUncheckedUpdateWithoutPropertyInput>
  }

  export type BookingUpdateManyWithWhereWithoutPropertyInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutPropertyInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutPropertyInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutPropertyInput, ReviewUncheckedUpdateWithoutPropertyInput>
    create: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutPropertyInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutPropertyInput, ReviewUncheckedUpdateWithoutPropertyInput>
  }

  export type ReviewUpdateManyWithWhereWithoutPropertyInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyCreateWithoutImagesInput = {
    name: string
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    provinsi: string
    zipCode: string
    mainImage?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPropertiesInput
    category: CategoryCreateNestedOneWithoutPropertiesInput
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    bookings?: BookingCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutImagesInput = {
    id?: number
    tenantId: number
    name: string
    categoryId: number
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    provinsi: string
    zipCode: string
    mainImage?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    bookings?: BookingUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutImagesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
  }

  export type PropertyUpsertWithoutImagesInput = {
    update: XOR<PropertyUpdateWithoutImagesInput, PropertyUncheckedUpdateWithoutImagesInput>
    create: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutImagesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutImagesInput, PropertyUncheckedUpdateWithoutImagesInput>
  }

  export type PropertyUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    provinsi?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPropertiesNestedInput
    category?: CategoryUpdateOneRequiredWithoutPropertiesNestedInput
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    provinsi?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutRoomsInput = {
    name: string
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    provinsi: string
    zipCode: string
    mainImage?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPropertiesInput
    category: CategoryCreateNestedOneWithoutPropertiesInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    bookings?: BookingCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutRoomsInput = {
    id?: number
    tenantId: number
    name: string
    categoryId: number
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    provinsi: string
    zipCode: string
    mainImage?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    bookings?: BookingUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutRoomsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutRoomsInput, PropertyUncheckedCreateWithoutRoomsInput>
  }

  export type RoomImageCreateWithoutRoomInput = {
    imageUrl: string
  }

  export type RoomImageUncheckedCreateWithoutRoomInput = {
    id?: number
    imageUrl: string
  }

  export type RoomImageCreateOrConnectWithoutRoomInput = {
    where: RoomImageWhereUniqueInput
    create: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput>
  }

  export type RoomImageCreateManyRoomInputEnvelope = {
    data: RoomImageCreateManyRoomInput | RoomImageCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomAvailabilityCreateWithoutRoomInput = {
    isAvailable?: boolean
    date: Date | string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomAvailabilityUncheckedCreateWithoutRoomInput = {
    id?: number
    isAvailable?: boolean
    date: Date | string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomAvailabilityCreateOrConnectWithoutRoomInput = {
    where: RoomAvailabilityWhereUniqueInput
    create: XOR<RoomAvailabilityCreateWithoutRoomInput, RoomAvailabilityUncheckedCreateWithoutRoomInput>
  }

  export type RoomAvailabilityCreateManyRoomInputEnvelope = {
    data: RoomAvailabilityCreateManyRoomInput | RoomAvailabilityCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type BookingRoomCreateWithoutRoomInput = {
    guestCount: number
    pricePerNight: number
    numberOfNights: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    booking: BookingCreateNestedOneWithoutBookingRoomsInput
  }

  export type BookingRoomUncheckedCreateWithoutRoomInput = {
    id?: number
    bookingId: number
    guestCount: number
    pricePerNight: number
    numberOfNights: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingRoomCreateOrConnectWithoutRoomInput = {
    where: BookingRoomWhereUniqueInput
    create: XOR<BookingRoomCreateWithoutRoomInput, BookingRoomUncheckedCreateWithoutRoomInput>
  }

  export type BookingRoomCreateManyRoomInputEnvelope = {
    data: BookingRoomCreateManyRoomInput | BookingRoomCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithoutRoomsInput = {
    update: XOR<PropertyUpdateWithoutRoomsInput, PropertyUncheckedUpdateWithoutRoomsInput>
    create: XOR<PropertyCreateWithoutRoomsInput, PropertyUncheckedCreateWithoutRoomsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutRoomsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutRoomsInput, PropertyUncheckedUpdateWithoutRoomsInput>
  }

  export type PropertyUpdateWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    provinsi?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPropertiesNestedInput
    category?: CategoryUpdateOneRequiredWithoutPropertiesNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    provinsi?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type RoomImageUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomImageWhereUniqueInput
    update: XOR<RoomImageUpdateWithoutRoomInput, RoomImageUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput>
  }

  export type RoomImageUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomImageWhereUniqueInput
    data: XOR<RoomImageUpdateWithoutRoomInput, RoomImageUncheckedUpdateWithoutRoomInput>
  }

  export type RoomImageUpdateManyWithWhereWithoutRoomInput = {
    where: RoomImageScalarWhereInput
    data: XOR<RoomImageUpdateManyMutationInput, RoomImageUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomImageScalarWhereInput = {
    AND?: RoomImageScalarWhereInput | RoomImageScalarWhereInput[]
    OR?: RoomImageScalarWhereInput[]
    NOT?: RoomImageScalarWhereInput | RoomImageScalarWhereInput[]
    id?: IntFilter<"RoomImage"> | number
    roomId?: IntFilter<"RoomImage"> | number
    imageUrl?: StringFilter<"RoomImage"> | string
  }

  export type RoomAvailabilityUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomAvailabilityWhereUniqueInput
    update: XOR<RoomAvailabilityUpdateWithoutRoomInput, RoomAvailabilityUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomAvailabilityCreateWithoutRoomInput, RoomAvailabilityUncheckedCreateWithoutRoomInput>
  }

  export type RoomAvailabilityUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomAvailabilityWhereUniqueInput
    data: XOR<RoomAvailabilityUpdateWithoutRoomInput, RoomAvailabilityUncheckedUpdateWithoutRoomInput>
  }

  export type RoomAvailabilityUpdateManyWithWhereWithoutRoomInput = {
    where: RoomAvailabilityScalarWhereInput
    data: XOR<RoomAvailabilityUpdateManyMutationInput, RoomAvailabilityUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomAvailabilityScalarWhereInput = {
    AND?: RoomAvailabilityScalarWhereInput | RoomAvailabilityScalarWhereInput[]
    OR?: RoomAvailabilityScalarWhereInput[]
    NOT?: RoomAvailabilityScalarWhereInput | RoomAvailabilityScalarWhereInput[]
    id?: IntFilter<"RoomAvailability"> | number
    roomId?: IntFilter<"RoomAvailability"> | number
    isAvailable?: BoolFilter<"RoomAvailability"> | boolean
    date?: DateTimeFilter<"RoomAvailability"> | Date | string
    price?: FloatFilter<"RoomAvailability"> | number
    createdAt?: DateTimeFilter<"RoomAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"RoomAvailability"> | Date | string
  }

  export type BookingRoomUpsertWithWhereUniqueWithoutRoomInput = {
    where: BookingRoomWhereUniqueInput
    update: XOR<BookingRoomUpdateWithoutRoomInput, BookingRoomUncheckedUpdateWithoutRoomInput>
    create: XOR<BookingRoomCreateWithoutRoomInput, BookingRoomUncheckedCreateWithoutRoomInput>
  }

  export type BookingRoomUpdateWithWhereUniqueWithoutRoomInput = {
    where: BookingRoomWhereUniqueInput
    data: XOR<BookingRoomUpdateWithoutRoomInput, BookingRoomUncheckedUpdateWithoutRoomInput>
  }

  export type BookingRoomUpdateManyWithWhereWithoutRoomInput = {
    where: BookingRoomScalarWhereInput
    data: XOR<BookingRoomUpdateManyMutationInput, BookingRoomUncheckedUpdateManyWithoutRoomInput>
  }

  export type BookingRoomScalarWhereInput = {
    AND?: BookingRoomScalarWhereInput | BookingRoomScalarWhereInput[]
    OR?: BookingRoomScalarWhereInput[]
    NOT?: BookingRoomScalarWhereInput | BookingRoomScalarWhereInput[]
    id?: IntFilter<"BookingRoom"> | number
    bookingId?: IntFilter<"BookingRoom"> | number
    roomId?: IntFilter<"BookingRoom"> | number
    guestCount?: IntFilter<"BookingRoom"> | number
    pricePerNight?: FloatFilter<"BookingRoom"> | number
    numberOfNights?: IntFilter<"BookingRoom"> | number
    totalPrice?: FloatFilter<"BookingRoom"> | number
    createdAt?: DateTimeFilter<"BookingRoom"> | Date | string
    updatedAt?: DateTimeFilter<"BookingRoom"> | Date | string
  }

  export type RoomCreateWithoutImagesInput = {
    name: string
    category: $Enums.RoomCategory
    description: string
    bedOption: $Enums.BedOption
    imageRoom?: string | null
    capacity: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutRoomsInput
    availabilities?: RoomAvailabilityCreateNestedManyWithoutRoomInput
    bookingRooms?: BookingRoomCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutImagesInput = {
    id?: number
    propertyId: number
    name: string
    category: $Enums.RoomCategory
    description: string
    bedOption: $Enums.BedOption
    imageRoom?: string | null
    capacity: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: RoomAvailabilityUncheckedCreateNestedManyWithoutRoomInput
    bookingRooms?: BookingRoomUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutImagesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutImagesInput, RoomUncheckedCreateWithoutImagesInput>
  }

  export type RoomUpsertWithoutImagesInput = {
    update: XOR<RoomUpdateWithoutImagesInput, RoomUncheckedUpdateWithoutImagesInput>
    create: XOR<RoomCreateWithoutImagesInput, RoomUncheckedCreateWithoutImagesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutImagesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutImagesInput, RoomUncheckedUpdateWithoutImagesInput>
  }

  export type RoomUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumRoomCategoryFieldUpdateOperationsInput | $Enums.RoomCategory
    description?: StringFieldUpdateOperationsInput | string
    bedOption?: EnumBedOptionFieldUpdateOperationsInput | $Enums.BedOption
    imageRoom?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutRoomsNestedInput
    availabilities?: RoomAvailabilityUpdateManyWithoutRoomNestedInput
    bookingRooms?: BookingRoomUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumRoomCategoryFieldUpdateOperationsInput | $Enums.RoomCategory
    description?: StringFieldUpdateOperationsInput | string
    bedOption?: EnumBedOptionFieldUpdateOperationsInput | $Enums.BedOption
    imageRoom?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: RoomAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
    bookingRooms?: BookingRoomUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateWithoutAvailabilitiesInput = {
    name: string
    category: $Enums.RoomCategory
    description: string
    bedOption: $Enums.BedOption
    imageRoom?: string | null
    capacity: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutRoomsInput
    images?: RoomImageCreateNestedManyWithoutRoomInput
    bookingRooms?: BookingRoomCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutAvailabilitiesInput = {
    id?: number
    propertyId: number
    name: string
    category: $Enums.RoomCategory
    description: string
    bedOption: $Enums.BedOption
    imageRoom?: string | null
    capacity: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
    bookingRooms?: BookingRoomUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutAvailabilitiesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutAvailabilitiesInput, RoomUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type RoomUpsertWithoutAvailabilitiesInput = {
    update: XOR<RoomUpdateWithoutAvailabilitiesInput, RoomUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<RoomCreateWithoutAvailabilitiesInput, RoomUncheckedCreateWithoutAvailabilitiesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutAvailabilitiesInput, RoomUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type RoomUpdateWithoutAvailabilitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumRoomCategoryFieldUpdateOperationsInput | $Enums.RoomCategory
    description?: StringFieldUpdateOperationsInput | string
    bedOption?: EnumBedOptionFieldUpdateOperationsInput | $Enums.BedOption
    imageRoom?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutRoomsNestedInput
    images?: RoomImageUpdateManyWithoutRoomNestedInput
    bookingRooms?: BookingRoomUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutAvailabilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumRoomCategoryFieldUpdateOperationsInput | $Enums.RoomCategory
    description?: StringFieldUpdateOperationsInput | string
    bedOption?: EnumBedOptionFieldUpdateOperationsInput | $Enums.BedOption
    imageRoom?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
    bookingRooms?: BookingRoomUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserCreateWithoutBookingsInput = {
    role: $Enums.UserRole
    fullName: string
    email: string
    password?: string | null
    profilePicture?: string | null
    provider?: string | null
    providerId?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant?: TenantCreateNestedOneWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: number
    role: $Enums.UserRole
    fullName: string
    email: string
    password?: string | null
    profilePicture?: string | null
    provider?: string | null
    providerId?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant?: TenantUncheckedCreateNestedOneWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type PropertyCreateWithoutBookingsInput = {
    name: string
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    provinsi: string
    zipCode: string
    mainImage?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPropertiesInput
    category: CategoryCreateNestedOneWithoutPropertiesInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutBookingsInput = {
    id?: number
    tenantId: number
    name: string
    categoryId: number
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    provinsi: string
    zipCode: string
    mainImage?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutBookingsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutBookingsInput, PropertyUncheckedCreateWithoutBookingsInput>
  }

  export type BookingRoomCreateWithoutBookingInput = {
    guestCount: number
    pricePerNight: number
    numberOfNights: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutBookingRoomsInput
  }

  export type BookingRoomUncheckedCreateWithoutBookingInput = {
    id?: number
    roomId: number
    guestCount: number
    pricePerNight: number
    numberOfNights: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingRoomCreateOrConnectWithoutBookingInput = {
    where: BookingRoomWhereUniqueInput
    create: XOR<BookingRoomCreateWithoutBookingInput, BookingRoomUncheckedCreateWithoutBookingInput>
  }

  export type BookingRoomCreateManyBookingInputEnvelope = {
    data: BookingRoomCreateManyBookingInput | BookingRoomCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutBookingInput = {
    comment: string
    tenantReply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    property: PropertyCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutBookingInput = {
    id?: number
    userId: number
    propertyId: number
    comment: string
    tenantReply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutBookingInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUncheckedUpdateOneWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertyUpsertWithoutBookingsInput = {
    update: XOR<PropertyUpdateWithoutBookingsInput, PropertyUncheckedUpdateWithoutBookingsInput>
    create: XOR<PropertyCreateWithoutBookingsInput, PropertyUncheckedCreateWithoutBookingsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutBookingsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutBookingsInput, PropertyUncheckedUpdateWithoutBookingsInput>
  }

  export type PropertyUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    provinsi?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPropertiesNestedInput
    category?: CategoryUpdateOneRequiredWithoutPropertiesNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    provinsi?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type BookingRoomUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingRoomWhereUniqueInput
    update: XOR<BookingRoomUpdateWithoutBookingInput, BookingRoomUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingRoomCreateWithoutBookingInput, BookingRoomUncheckedCreateWithoutBookingInput>
  }

  export type BookingRoomUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingRoomWhereUniqueInput
    data: XOR<BookingRoomUpdateWithoutBookingInput, BookingRoomUncheckedUpdateWithoutBookingInput>
  }

  export type BookingRoomUpdateManyWithWhereWithoutBookingInput = {
    where: BookingRoomScalarWhereInput
    data: XOR<BookingRoomUpdateManyMutationInput, BookingRoomUncheckedUpdateManyWithoutBookingInput>
  }

  export type ReviewUpsertWithoutBookingInput = {
    update: XOR<ReviewUpdateWithoutBookingInput, ReviewUncheckedUpdateWithoutBookingInput>
    create: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutBookingInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutBookingInput, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type ReviewUpdateWithoutBookingInput = {
    comment?: StringFieldUpdateOperationsInput | string
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    property?: PropertyUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateWithoutBookingRoomsInput = {
    invoiceNumber: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status?: $Enums.BookingStatus
    paymentDeadline: Date | string
    paymentProof?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    property: PropertyCreateNestedOneWithoutBookingsInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutBookingRoomsInput = {
    id?: number
    userId: number
    propertyId: number
    invoiceNumber: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status?: $Enums.BookingStatus
    paymentDeadline: Date | string
    paymentProof?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutBookingRoomsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutBookingRoomsInput, BookingUncheckedCreateWithoutBookingRoomsInput>
  }

  export type RoomCreateWithoutBookingRoomsInput = {
    name: string
    category: $Enums.RoomCategory
    description: string
    bedOption: $Enums.BedOption
    imageRoom?: string | null
    capacity: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutRoomsInput
    images?: RoomImageCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutBookingRoomsInput = {
    id?: number
    propertyId: number
    name: string
    category: $Enums.RoomCategory
    description: string
    bedOption: $Enums.BedOption
    imageRoom?: string | null
    capacity: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutBookingRoomsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutBookingRoomsInput, RoomUncheckedCreateWithoutBookingRoomsInput>
  }

  export type BookingUpsertWithoutBookingRoomsInput = {
    update: XOR<BookingUpdateWithoutBookingRoomsInput, BookingUncheckedUpdateWithoutBookingRoomsInput>
    create: XOR<BookingCreateWithoutBookingRoomsInput, BookingUncheckedCreateWithoutBookingRoomsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutBookingRoomsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutBookingRoomsInput, BookingUncheckedUpdateWithoutBookingRoomsInput>
  }

  export type BookingUpdateWithoutBookingRoomsInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    property?: PropertyUpdateOneRequiredWithoutBookingsNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutBookingRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type RoomUpsertWithoutBookingRoomsInput = {
    update: XOR<RoomUpdateWithoutBookingRoomsInput, RoomUncheckedUpdateWithoutBookingRoomsInput>
    create: XOR<RoomCreateWithoutBookingRoomsInput, RoomUncheckedCreateWithoutBookingRoomsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutBookingRoomsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutBookingRoomsInput, RoomUncheckedUpdateWithoutBookingRoomsInput>
  }

  export type RoomUpdateWithoutBookingRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumRoomCategoryFieldUpdateOperationsInput | $Enums.RoomCategory
    description?: StringFieldUpdateOperationsInput | string
    bedOption?: EnumBedOptionFieldUpdateOperationsInput | $Enums.BedOption
    imageRoom?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutRoomsNestedInput
    images?: RoomImageUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutBookingRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumRoomCategoryFieldUpdateOperationsInput | $Enums.RoomCategory
    description?: StringFieldUpdateOperationsInput | string
    bedOption?: EnumBedOptionFieldUpdateOperationsInput | $Enums.BedOption
    imageRoom?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserCreateWithoutReviewsInput = {
    role: $Enums.UserRole
    fullName: string
    email: string
    password?: string | null
    profilePicture?: string | null
    provider?: string | null
    providerId?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant?: TenantCreateNestedOneWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    role: $Enums.UserRole
    fullName: string
    email: string
    password?: string | null
    profilePicture?: string | null
    provider?: string | null
    providerId?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant?: TenantUncheckedCreateNestedOneWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type PropertyCreateWithoutReviewsInput = {
    name: string
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    provinsi: string
    zipCode: string
    mainImage?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPropertiesInput
    category: CategoryCreateNestedOneWithoutPropertiesInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    bookings?: BookingCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutReviewsInput = {
    id?: number
    tenantId: number
    name: string
    categoryId: number
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    provinsi: string
    zipCode: string
    mainImage?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    bookings?: BookingUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutReviewsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutReviewsInput, PropertyUncheckedCreateWithoutReviewsInput>
  }

  export type BookingCreateWithoutReviewInput = {
    invoiceNumber: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status?: $Enums.BookingStatus
    paymentDeadline: Date | string
    paymentProof?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    property: PropertyCreateNestedOneWithoutBookingsInput
    bookingRooms?: BookingRoomCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutReviewInput = {
    id?: number
    userId: number
    propertyId: number
    invoiceNumber: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status?: $Enums.BookingStatus
    paymentDeadline: Date | string
    paymentProof?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingRooms?: BookingRoomUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutReviewInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUncheckedUpdateOneWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertyUpsertWithoutReviewsInput = {
    update: XOR<PropertyUpdateWithoutReviewsInput, PropertyUncheckedUpdateWithoutReviewsInput>
    create: XOR<PropertyCreateWithoutReviewsInput, PropertyUncheckedCreateWithoutReviewsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutReviewsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutReviewsInput, PropertyUncheckedUpdateWithoutReviewsInput>
  }

  export type PropertyUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    provinsi?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPropertiesNestedInput
    category?: CategoryUpdateOneRequiredWithoutPropertiesNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    provinsi?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type BookingUpsertWithoutReviewInput = {
    update: XOR<BookingUpdateWithoutReviewInput, BookingUncheckedUpdateWithoutReviewInput>
    create: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutReviewInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutReviewInput, BookingUncheckedUpdateWithoutReviewInput>
  }

  export type BookingUpdateWithoutReviewInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    property?: PropertyUpdateOneRequiredWithoutBookingsNestedInput
    bookingRooms?: BookingRoomUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingRooms?: BookingRoomUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type UserCreateWithoutTokensInput = {
    role: $Enums.UserRole
    fullName: string
    email: string
    password?: string | null
    profilePicture?: string | null
    provider?: string | null
    providerId?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant?: TenantCreateNestedOneWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: number
    role: $Enums.UserRole
    fullName: string
    email: string
    password?: string | null
    profilePicture?: string | null
    provider?: string | null
    providerId?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant?: TenantUncheckedCreateNestedOneWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUncheckedUpdateOneWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookingCreateManyUserInput = {
    id?: number
    propertyId: number
    invoiceNumber: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status?: $Enums.BookingStatus
    paymentDeadline: Date | string
    paymentProof?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    propertyId: number
    bookingId: number
    comment: string
    tenantReply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenCreateManyUserInput = {
    id?: number
    token: string
    purpose: $Enums.TokenPurpose
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutBookingsNestedInput
    bookingRooms?: BookingRoomUpdateManyWithoutBookingNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingRooms?: BookingRoomUncheckedUpdateManyWithoutBookingNestedInput
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutReviewsNestedInput
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    purpose?: EnumTokenPurposeFieldUpdateOperationsInput | $Enums.TokenPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    purpose?: EnumTokenPurposeFieldUpdateOperationsInput | $Enums.TokenPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    purpose?: EnumTokenPurposeFieldUpdateOperationsInput | $Enums.TokenPurpose
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateManyTenantInput = {
    id?: number
    name: string
    categoryId: number
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    provinsi: string
    zipCode: string
    mainImage?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateWithoutTenantInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    provinsi?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutPropertiesNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    provinsi?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    provinsi?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateManyCategoryInput = {
    id?: number
    tenantId: number
    name: string
    description: string
    location: string
    latitude?: number | null
    longitude?: number | null
    provinsi: string
    zipCode: string
    mainImage?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    provinsi?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPropertiesNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    provinsi?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    provinsi?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateManyPropertyInput = {
    id?: number
    imageUrl: string
  }

  export type RoomCreateManyPropertyInput = {
    id?: number
    name: string
    category: $Enums.RoomCategory
    description: string
    bedOption: $Enums.BedOption
    imageRoom?: string | null
    capacity: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyPropertyInput = {
    id?: number
    userId: number
    invoiceNumber: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status?: $Enums.BookingStatus
    paymentDeadline: Date | string
    paymentProof?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyPropertyInput = {
    id?: number
    userId: number
    bookingId: number
    comment: string
    tenantReply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyImageUpdateWithoutPropertyInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyImageUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyImageUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type RoomUpdateWithoutPropertyInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumRoomCategoryFieldUpdateOperationsInput | $Enums.RoomCategory
    description?: StringFieldUpdateOperationsInput | string
    bedOption?: EnumBedOptionFieldUpdateOperationsInput | $Enums.BedOption
    imageRoom?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: RoomImageUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUpdateManyWithoutRoomNestedInput
    bookingRooms?: BookingRoomUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumRoomCategoryFieldUpdateOperationsInput | $Enums.RoomCategory
    description?: StringFieldUpdateOperationsInput | string
    bedOption?: EnumBedOptionFieldUpdateOperationsInput | $Enums.BedOption
    imageRoom?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
    bookingRooms?: BookingRoomUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumRoomCategoryFieldUpdateOperationsInput | $Enums.RoomCategory
    description?: StringFieldUpdateOperationsInput | string
    bedOption?: EnumBedOptionFieldUpdateOperationsInput | $Enums.BedOption
    imageRoom?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutPropertyInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    bookingRooms?: BookingRoomUpdateManyWithoutBookingNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingRooms?: BookingRoomUncheckedUpdateManyWithoutBookingNestedInput
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutPropertyInput = {
    comment?: StringFieldUpdateOperationsInput | string
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomImageCreateManyRoomInput = {
    id?: number
    imageUrl: string
  }

  export type RoomAvailabilityCreateManyRoomInput = {
    id?: number
    isAvailable?: boolean
    date: Date | string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingRoomCreateManyRoomInput = {
    id?: number
    bookingId: number
    guestCount: number
    pricePerNight: number
    numberOfNights: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomImageUpdateWithoutRoomInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type RoomImageUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type RoomImageUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type RoomAvailabilityUpdateWithoutRoomInput = {
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomAvailabilityUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomAvailabilityUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingRoomUpdateWithoutRoomInput = {
    guestCount?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    numberOfNights?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutBookingRoomsNestedInput
  }

  export type BookingRoomUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    numberOfNights?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingRoomUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    numberOfNights?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingRoomCreateManyBookingInput = {
    id?: number
    roomId: number
    guestCount: number
    pricePerNight: number
    numberOfNights: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingRoomUpdateWithoutBookingInput = {
    guestCount?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    numberOfNights?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutBookingRoomsNestedInput
  }

  export type BookingRoomUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    numberOfNights?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingRoomUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    numberOfNights?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TenantCountOutputTypeDefaultArgs instead
     */
    export type TenantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyCountOutputTypeDefaultArgs instead
     */
    export type PropertyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoomCountOutputTypeDefaultArgs instead
     */
    export type RoomCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoomCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingCountOutputTypeDefaultArgs instead
     */
    export type BookingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TenantDefaultArgs instead
     */
    export type TenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyDefaultArgs instead
     */
    export type PropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyImageDefaultArgs instead
     */
    export type PropertyImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoomDefaultArgs instead
     */
    export type RoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoomDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoomImageDefaultArgs instead
     */
    export type RoomImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoomImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoomAvailabilityDefaultArgs instead
     */
    export type RoomAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoomAvailabilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingDefaultArgs instead
     */
    export type BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingRoomDefaultArgs instead
     */
    export type BookingRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingRoomDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewDefaultArgs instead
     */
    export type ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TokenDefaultArgs instead
     */
    export type TokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TokenDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}