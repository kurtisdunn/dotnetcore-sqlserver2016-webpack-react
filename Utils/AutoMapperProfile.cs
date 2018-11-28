using AutoMapper;
using Blog.Dtos;
using Blog.Entities;

namespace Blog.Utils
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
        }
    }
}