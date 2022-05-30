package lise.uebungsprojekt.model

import com.fasterxml.jackson.databind.annotation.JsonSerialize
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer
import org.bson.types.ObjectId
import org.springframework.data.mongodb.core.mapping.Document
import javax.validation.constraints.Max
import javax.validation.constraints.Min
import javax.validation.constraints.NotNull

@Document
data class Rating(@JsonSerialize(using = ToStringSerializer::class) @field:NotNull val gameId: ObjectId,
                  @field:NotNull @field:Min(1) @field:Max(5) val graphics: Int,
                  @field:NotNull @field:Min(1) @field:Max(5) val sound: Int,
                  @field:NotNull @field:Min(1) @field:Max(5) val addiction: Int,
                  @field:NotNull @field:Min(1) @field:Max(5) val action: Int,
                  val comment: String?)