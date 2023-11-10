import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type quoteDocument = Quote & Document


@Schema({ timestamps: true, versionKey: false })
export class Quote {
    @Prop({ required: true, type: String })
    status: String

    @Prop({ required: true, type: Boolean })
    isSingle: Boolean

    @Prop({ required: true, type: Number })
    routeNumber: Number

    @Prop({ required: true, type: Boolean })
    isReturn: Boolean

    @Prop({ required: true, type: Boolean })
    isVehicleStay: Boolean

    @Prop({ required: true, type: String })
    customerReference: String

    @Prop({ required: true, type: Number })
    customerId: Number

    @Prop({ required: true, type: Array })
    passengers: passenger[]

    @Prop({ required: true, type: Object })
    journeyInformation: journeyInformation

    @Prop({ required: true, type: Array })
    movements: movement[]


}

export const QuoteSchema = SchemaFactory.createForClass(Quote)



export type passenger = {
    name: String,
    email: String,
    Phone: String,
}

export type journeyInformation = {
    journeyTypeId: Number,
    sourceTypeId: Number,
    vehicleTypeId: Number,
    vehicleClassTypeId: Number,
    vehicleLuggageTypeId: Number,
    passengers: Number,
    notes: String,
    features: feature[],
}

export type feature = {
    id: Number
}

export class movement {
    vehicleTypeId: Number
    vehicleClassTypeId: Number
    passengers: Number
    drivers: Number
    pas: Number
    priceDetails: priceDetails
}

export class priceDetails {
    vatPercent: Number
    vehicleAmount: Number
    paAmount: Number
    vatAmount: Number
    totalAmount: Number
    extraChargers: extraCharge[]
}

export type extraCharge = {
    name: String
    amount: Number
}
