import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNotEmptyObject, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { StatusEnum } from "../status.enum";
import { Type } from "class-transformer";


export class passenger {
    @IsString()
    @IsNotEmpty()
    name: String

    @IsString()
    @IsNotEmpty()
    email: String

    @IsString()
    @IsNotEmpty()
    phone: String
}

export class journeyInformation {

    @IsNumber()
    @IsNotEmpty()
    journeyTypeId: Number

    @IsNumber()
    @IsNotEmpty()
    sourceTypeId: Number

    @IsNumber()
    @IsNotEmpty()
    vehicleTypeId: Number

    @IsNumber()
    @IsNotEmpty()
    vehicleClassTypeId: Number

    @IsNumber()
    @IsNotEmpty()
    vehicleLuggageTypeId: Number

    @IsNumber()
    @IsNotEmpty()
    passengers: Number

    @IsString()
    @IsNotEmpty()
    notes: String

    @ValidateNested()
    @IsArray()
    features: feature[]
}

export class feature {
    @IsNumber()
    @IsNotEmpty()
    id: Number
}

export class extraCharge {

    @IsString()
    @IsNotEmpty()
    name: String

    @IsNumber()
    @IsNotEmpty()
    amount: Number
}

export class priceDetails {
    @IsNumber()
    @IsNotEmpty()
    vatPercent: Number

    @IsNumber()
    @IsNotEmpty()
    vehicleAmount: Number

    @IsNumber()
    @IsNotEmpty()
    paAmount: Number

    @IsNumber()
    @IsNotEmpty()
    vatAmount: Number

    @IsNumber()
    @IsNotEmpty()
    totalAmount: Number

    @ValidateNested()
    @IsArray()
    @Type(() => extraCharge)
    extraCharges: extraCharge[]
}

export class movement {
    @IsNumber()
    @IsNotEmpty()
    vehicleTypeId: Number

    @IsNumber()
    @IsNotEmpty()
    vehicleClassTypeId: Number

    @IsNumber()
    @IsNotEmpty()
    passengers: Number

    @IsNumber()
    @IsNotEmpty()
    drivers: Number

    @IsNumber()
    @IsNotEmpty()
    pas: Number

    @ValidateNested()
    @Type(() => priceDetails)
    @IsObject()
    @IsNotEmptyObject()
    priceDetails: priceDetails
}







export class CreateQuote {

    @IsNotEmpty()
    @IsEnum(StatusEnum, {
        message: `Status Should must be ${StatusEnum.NEW}, ${StatusEnum.DECLINED} or ${StatusEnum.OPEN}`
    })
    status: String

    @IsBoolean()
    isSingle: Boolean

    @IsNumber()
    routeNumber: Number

    @IsBoolean()
    isReturn: Boolean

    @IsBoolean()
    isVehicleStay: Boolean

    @IsString()
    @IsNotEmpty()
    customerReference: String

    @IsNumber()
    customerId: Number

    @IsArray()
    @ValidateNested()
    @Type(() => passenger)
    passengers: passenger[]

    @IsObject()
    journeyInformation: journeyInformation

    @IsArray()
    @ValidateNested()
    @Type(() => movement)
    movements: movement[]
}






