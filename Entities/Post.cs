using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Blog.Entities

{
     public class Post : BaseEntity
     {
          [Key]
          [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
          public int Id { get; set; }
          [Required]
          [MaxLength(100)]
          public string Title { get; set; }
          [Required]
          [MaxLength(5000)]
          public string Body { get; set; }

     }
}
