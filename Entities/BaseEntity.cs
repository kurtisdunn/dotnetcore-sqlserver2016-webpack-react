using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;

namespace Blog.Entities

{
     public class BaseEntity
     {
       public DateTime? DateCreated { get; set; }
       public string UserCreated { get; set; }
       public DateTime? DateModified { get; set; }
       public string UserModified { get; set; }
     }
}
